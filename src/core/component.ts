import EventBus from './event-bus';

type EventName = keyof typeof Component.eventName;

export default abstract class Component<T> {
	static eventName = {
		render: 'render',
		componentDidMount: 'componentDidMount',
	} as const;

	private readonly eventBus: EventBus<EventName>;
	protected props: T;

	private _element: HTMLElement;

	constructor(props: T) {
		this.eventBus = new EventBus();
		this.props = this._makePropsProxy(props);

		this._registerEvents();

		this.eventBus.emite(Component.eventName.render);
	}

	private _makePropsProxy(props: T): T {
		// TODO: Finish the proxy method
		return props;
	}

	private _registerEvents() {
		this.eventBus.on(Component.eventName.render, this._render.bind(this));
		this.eventBus.on(Component.eventName.componentDidMount, this._componentDidMount.bind(this));
	}

	private _render() {
		this._element = this.render();
	}

	private _componentDidMount() {
		this.componentDidMount && this.componentDidMount(this.props);
	}

	public setProps(nextProps: Partial<T>) {
		if (!nextProps) {
			return;
		}

		this.props = { ...this.props, ...nextProps };
	}

	public get element() {
		return this._element;
	}

	protected abstract render(): HTMLElement;
	protected componentDidMount?(oldProps: T): void;
}
