import Component from './component';

import type { Path } from '../types';

class Router {
	private _routes: Record<string, Component> = {};
	private _rootElement?: HTMLElement;
	private readonly _history: History;

	constructor() {
		this._history = window.history;
	}

	public start(root: HTMLElement) {
		this._rootElement = root;

		window.addEventListener('popstate', this._render.bind(this));

		this._render();
	}

	private _render() {
		if (!this._rootElement) {
			throw new Error('There is no root element');
		}

		this._rootElement.innerHTML = '';
		this._rootElement.append(this._routes[this._currentPath].element);
	}

	private get _currentPath() {
		return document.location.pathname;
	}

	public use(path: Path, page: Component) {
		this._routes[path] = page;

		return this;
	}

	public go(path: Path) {
		if (path in this._routes) {
			this._history.pushState({}, '', path);
			this._render();
		} else {
			throw new Error(`Pages with this path '${path}' is missing. Add via router.use(path, component)`);
		}
	}

	public back() {
		this._history.back();
	}

	public forward() {
		this._history.forward();
	}
}

export default new Router();