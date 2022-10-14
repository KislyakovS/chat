// import { v4 as uuidv4 } from 'uuid';

// import EventBus from './event-bus';
// import { compileTemplatePug } from '../utils';

// import type { ElementEventName } from '../types';

// type EventName = keyof typeof Component.eventName;
// export type DefaultProps = {
// 	events?: Partial<Record<ElementEventName, EventListenerOrEventListenerObject>>
// 	children?: Component[]
// }

// export default abstract class Component<T extends DefaultProps = Record<string, unknown>> {
// 	static eventName = {
// 		render: 'render',
// 		rerender: 'rerender',
// 		componentDidMount: 'componentDidMount',
// 		componentDidUpdate: 'componentDidUpdate',
// 	} as const;
// 	public readonly id = uuidv4();

// 	private readonly eventBus: EventBus<EventName>;
// 	protected props: T;
// 	private readonly _template: string;
// 	private _element: HTMLElement;

// 	constructor(template: string, props: T = {} as T) {
// 		this.eventBus = new EventBus();
// 		this.props = this._makePropsProxy(props);
// 		this._template = template;

// 		this._registerEvents();

// 		this.eventBus.emite(Component.eventName.render);
// 	}

// 	private _makePropsProxy(props: T) {
// 		return new Proxy(props, {
// 			set: (target, key, value) => {
// 				target[key as keyof T] = value;

// 				this.eventBus.emite(Component.eventName.rerender);
// 				return true;
// 			},
// 		});
// 	}

// 	private _registerEvents() {
// 		this.eventBus.on(Component.eventName.render, this._render.bind(this));
// 		this.eventBus.on(Component.eventName.rerender, this._rerender.bind(this));
// 		this.eventBus.on(Component.eventName.componentDidMount, this._componentDidMount.bind(this));
// 		this.eventBus.on(Component.eventName.componentDidUpdate, this._componentDidUpdate.bind(this));
// 	}

// 	private _render() {
// 		this._element = this._compile();

// 		this._addEventListener();

// 		this.eventBus.emite(Component.eventName.componentDidMount);
// 	}

// 	private _rerender() {
// 		this._removeEventListener();

// 		const newElement = this._compile();
// 		this._element.replaceWith(newElement);
// 		this._element = newElement;

// 		this._addEventListener();

// 		this.eventBus.emite(Component.eventName.componentDidUpdate);
// 	}

// 	private _compile() {
// 		return compileTemplatePug(this._template, this.props);
// 	}

// 	private _componentDidMount() {
// 		this.componentDidMount?.();
// 	}

// 	private _componentDidUpdate() {
// 		this.componentDidUpdate?.();

// 		this.props.children?.forEach((child) => child.componentDidUpdate?.());
// 	}

// 	private _addEventListener() {
// 		if (!this.props.events) {
// 			return;
// 		}

// 		Object.entries(this.props.events).forEach(([eventName, listener]) => {
// 			this.element.addEventListener(eventName, listener);
// 		});
// 	}

// 	private _removeEventListener() {
// 		if (!this.props.events) {
// 			return;
// 		}

// 		Object.entries(this.props.events).forEach(([eventName, listener]) => {
// 			this.element.removeEventListener(eventName, listener);
// 		});
// 	}

// 	public setProps(nextProps: Partial<T>) {
// 		if (!nextProps) {
// 			return;
// 		}

// 		Object.assign(this.props, nextProps);
// 	}

// 	public get element() {
// 		return this._element;
// 	}

// 	protected componentDidMount?(): void;
// 	protected componentDidUpdate?(): void;
// }

import Template from '../utils/template';
import EventBus from './event-bus';

import type { Listeners, Type } from '../types';

type EventName = keyof typeof Component.eventName;
export type Children = Record<string, Type<Component>>;
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
	private _template: Element;

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

	private _render() {
		this._template = this._compile();
		this._element = Template.toDOM(this._template);

		this.eventBus.emite(Component.eventName.componentDidMount);
	}

	private _rerender() {
		this._template = this._compile();

		const newElement = Template.toDOM(this._template);
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
		return Template.compile(this.render(), this.getChildren(), this.getListeners());
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

	public get template() {
		return this._template;
	}

	protected children?(): Children;
	protected listeners?(): Listeners;
	protected componentDidMount?(): void;
	protected componentDidUpdate?(): void;

	abstract render(): string;
}
