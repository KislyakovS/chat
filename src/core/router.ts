import Page from './page';

import type { Path, Constructor } from '../types';

class Router {
  private _routes: Record<string, Constructor<Page>> = {};
  private _rootElement?: Element;
  private readonly _history: History;
  private _NotFound?: Constructor<Page>;

  constructor() {
    this._history = window.history;
  }

  public start(root: Element) {
    this._rootElement = root;

    window.addEventListener('popstate', this._render.bind(this));

    this._render();
  }

  private _render() {
    if (!this._rootElement) {
      throw new Error('There is no root element');
    }

    let page: Page;

    if (this._isPathRouters(this._currentPath)) {
      page = new this._routes[this._currentPath]();
    } else {
      if (!this._NotFound) {
        throw new Error('Not page `not found`. Set by method `notFound`');
      }

      page = new this._NotFound();
    }

    this._rootElement.innerHTML = '';
    this._rootElement.append(page.element);
  }

  private _isPathRouters(path: Path) {
    return path in this._routes;
  }

  private get _currentPath(): Path {
    return document.location.pathname as Path;
  }

  public use(path: Path, page: Constructor<Page>) {
    this._routes[path] = page;

    return this;
  }

  public notFound(page: Constructor<Page>) {
    this._NotFound = page;

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
