import Template from '../utils/template';
import EventBus from './event-bus';

import type { Listeners, Constructor } from '../types';

type EventName = keyof typeof Component.eventName;
export type Children = Record<string, Constructor<Component>>;
export type DefaultProps = { children?: string };
export type DefaultState = Record<string, unknown>;

export default abstract class Component<
	P extends DefaultProps = DefaultProps,
	S extends DefaultState = DefaultState
> {
	static readonly eventName = {
		render: 'render',
		rerender: 'rerender',
		componentDidMount: 'componentDidMount',
		componentDidUpdate: 'componentDidUpdate',
	} as const;

	private readonly eventBus = new EventBus<EventName>();
	protected props: P;
	protected state: S;
	private readonly _children: Children;
	private readonly _listeners: Listeners;
	private _element: HTMLElement;

	constructor(props = {} as P, { state = {} as S, children = {}, listeners = {} } = {}) {
		this.props = props;
		this.state = this._makeStateProxy(state);

		this._children = children;
		this._listeners = listeners;

		this._registerEvents();

		this.eventBus.emite(Component.eventName.render);
	}

	private _registerEvents() {
		this.eventBus.on(Component.eventName.render, this._render.bind(this));
		this.eventBus.on(Component.eventName.rerender, this._rerender.bind(this));
		this.eventBus.on(Component.eventName.componentDidMount, this._componentDidMount.bind(this));
		this.eventBus.on(Component.eventName.componentDidUpdate, this._componentDidUpdate.bind(this));
	}

	private _makeStateProxy(state: S) {
		return new Proxy(state, {
			set: (target, key, value) => {
				if (target[key as keyof S] !== value) {
					target[key as keyof S] = value;
					this.eventBus.emite(Component.eventName.rerender);

					return true;
				}

				return false;
			},
		});
	}

	protected _render() {
		this._element = this._compile();

		this.eventBus.emite(Component.eventName.componentDidMount);
	}

	private _rerender() {
		const newElement = this._compile();
		this._element.replaceWith(newElement);
		this._element = newElement;

		this.eventBus.emite(Component.eventName.componentDidUpdate);
	}

	private _componentDidMount() {
		this.componentDidMount?.();
	}

	private _componentDidUpdate() {
		this.componentDidUpdate?.();
	}

	private _compile() {
		return Template.compile(this.render(), this.getChildren());
	}

	public getChildren() {
		const children = this.children?.() || {};

		return { ...children, ...this._children };
	}

	public getListeners() {
		const events = this.listeners?.() || {};

		return { ...events, ...this._listeners };
	}

	public get element() {
		return this._element;
	}

	protected children?(): Children;
	protected listeners?(): Listeners;
	protected componentDidMount?(): void;
	protected componentDidUpdate?(): void;

	abstract render(): string;
}
