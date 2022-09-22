import { v4 as uuidv4 } from 'uuid';

import EventBus from './event-bus';
import { compileTemplatePug } from '../utils';

import type { ElementEventName } from '../types';

type EventName = keyof typeof Component.eventName;
export type DefaultProps = {
	events?: Partial<Record<ElementEventName, EventListenerOrEventListenerObject>>
	children?: Component<DefaultProps>[]
}

export default abstract class Component<T extends DefaultProps> {
	static eventName = {
		render: 'render',
		rerender: 'rerender',
		componentDidMount: 'componentDidMount',
		componentDidUpdate: 'componentDidUpdate'
	} as const;

	private readonly eventBus: EventBus<EventName>;
	protected props: T;

	public readonly id = uuidv4();
	private readonly _template: string;
	private _element: HTMLElement;

	constructor(template: string, props: T) {
		this.eventBus = new EventBus();
		this.props = this._makePropsProxy(props);
		this._template = template;

		this._registerEvents();

		this.eventBus.emite(Component.eventName.render);
	}

	private _makePropsProxy(props: T) {
		return new Proxy(props, {
			set: (target, key, value) => {
				target[key as keyof T] = value;

				this.eventBus.emite(Component.eventName.rerender);
				return true;
			}
		});
	}

	private _registerEvents() {
		this.eventBus.on(Component.eventName.render, this._render.bind(this));
		this.eventBus.on(Component.eventName.rerender, this._rerender.bind(this));
		this.eventBus.on(Component.eventName.componentDidMount, this._componentDidMount.bind(this));
		this.eventBus.on(Component.eventName.componentDidUpdate, this._componentDidUpdate.bind(this));
	}

	private _render() {
		this._element = this._compile();

		this._addEventListener();

		this.eventBus.emite(Component.eventName.componentDidMount);
	}

	private _rerender() {
		this._removeEventListener();

		const newElement = this._compile();
		this._element.replaceWith(newElement);
		this._element = newElement;

		this._addEventListener();

		this.eventBus.emite(Component.eventName.componentDidUpdate);
	}

	private _compile() {
		return compileTemplatePug(this._template, this.props);
	}

	private _componentDidMount() {
		this.componentDidMount && this.componentDidMount();
	}

	private _componentDidUpdate() {
		this.componentDidUpdate && this.componentDidUpdate();

		this.props.children?.forEach((child) => child.componentDidUpdate && child.componentDidUpdate());
	}

	private _addEventListener() {
		if (!this.props.events) {
			return;
		}

		Object.entries(this.props.events).forEach(([eventName, listener]) => {
			this.element.addEventListener(eventName, listener);
		});
	}

	private _removeEventListener() {
		if (!this.props.events) {
			return;
		}

		Object.entries(this.props.events).forEach(([eventName, listener]) => {
			this.element.removeEventListener(eventName, listener);
		});
	}

	public setProps(nextProps: Partial<T>) {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	}

	public get element() {
		return this._element;
	}

	protected componentDidMount?(): void;
	protected componentDidUpdate?(): void;
}