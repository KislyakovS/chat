import Template from '../utils/template';
import EventBus from './event-bus';

import getElementByAttribute from '../utils/get-element-by-attribute';

import type { Constructor } from '../types';

enum EventName {
	render = 'render',
	rerender = 'rerender',
	componentDidMount = 'componentDidMount',
	componentDidUpdate = 'componentDidUpdate',
}
export type Children = Record<string, Constructor<Component>>;
type Event = {
	name: keyof HTMLElementEventMap,
	listener: EventListener
};
export type Events = Event[];
export type DefaultProps = { children?: string };
export type DefaultState = Record<string, unknown>;

export default abstract class Component<
	P extends DefaultProps = DefaultProps,
	S extends DefaultState = DefaultState
> {
	private readonly eventBus = new EventBus<EventName>();
	protected props: P;
	protected state: S;
	private readonly _children: Children;
	private readonly _events: Events;
	private _element: HTMLElement;

	constructor(props = {} as P, { state = {} as S, children = {}, events = [] } = {}) {
		this.props = props;
		this.state = this._makeStateProxy(state);

		this._children = children;
		this._events = events;

		this._registerEvents();

		this.eventBus.emite(EventName.render);
	}

	private _registerEvents() {
		this.eventBus.on(EventName.render, this._render.bind(this));
		this.eventBus.on(EventName.rerender, this._rerender.bind(this));
		this.eventBus.on(EventName.componentDidMount, this._componentDidMount.bind(this));
		this.eventBus.on(EventName.componentDidUpdate, this._componentDidUpdate.bind(this));
	}

	private _makeStateProxy(state: S) {
		return new Proxy(state, {
			set: (target, key, value) => {
				if (!Object.is(target[key as keyof S], value)) {
					target[key as keyof S] = value;
					this.eventBus.emite(EventName.rerender);

					return true;
				}

				return false;
			},
		});
	}

	protected _render() {
		this._element = this._compile();

		this._addEventListeners();

		this.eventBus.emite(EventName.componentDidMount);
	}

	private _rerender() {
		this._removeEventListeners();

		const newElement = this._compile();
		this._element.replaceWith(newElement);
		this._element = newElement;

		this._addEventListeners();

		this.eventBus.emite(EventName.componentDidUpdate);
	}

	private _addEventListeners() {
		this.getEvents().forEach((event) => {
			const { name, listener } = event;
			const element = getElementByAttribute(this.element, name, listener.name.replace('bound ', ''));

			if (element) {
				element.removeAttribute(name);
				element.addEventListener(name, listener);
			}
		});
	}

	private _removeEventListeners() {
		this.getEvents().forEach((event) => {
			const { name, listener } = event;
			const element = getElementByAttribute(this.element, name, listener.name.replace('bound ', ''));

			if (element) {
				element.removeEventListener(name, listener);
			}
		});
	}

	private _componentDidMount() {
		this.componentDidMount?.();
	}

	private _componentDidUpdate() {
		this.componentDidUpdate?.();
	}

	private _compile() {
		return Template.compile(this.render(), this.getChildren(), this.getEvents());
	}

	public getChildren() {
		const children = this.children?.() || {};

		return { ...children, ...this._children };
	}

	public getEvents() {
		const events = this.events?.() || [];

		return [...events, ...this._events];
	}

	public get element() {
		return this._element;
	}

	protected children?(): Children;
	protected events?(): Events;
	protected componentDidMount?(): void;
	protected componentDidUpdate?(): void;

	abstract render(): string;
}
