import type { Children, Events } from '../core/component';

class Template {
	private readonly _parse = new DOMParser();

	public compile(template: string, children: Children = {}, events: Events = []) {
		const fragment = document.createDocumentFragment();
		const { firstElementChild: firstChild } = this._toXml(template);

		if (!firstChild) {
			throw new Error('Template conversion error.');
		}

		if (this._isCustomElement(firstChild)) {
			const { localName, childNodes } = firstChild;

			if (!(localName in children)) {
				throw new Error(`There is no component named '${localName}'.`);
			}

			const props: Record<string, unknown> = this._mapAttributes(firstChild.attributes);
			if (childNodes.length) {
				props.children = firstChild.innerHTML;
			}

			const component = new children[localName](props, { children, events });
			fragment.append(component.element);
		} else if (firstChild.localName === 'svg') {
				fragment.append(this._toHtml(firstChild.outerHTML)[0]);
		} else {
			const parentElement = this._toHtml(firstChild.outerHTML)[0].cloneNode();

			firstChild.childNodes.forEach((child) => {
				if (!this._isElement(child)) {
					if (child.textContent?.trim() !== '') {
						parentElement.textContent = child.textContent;
					}
					return;
				}

				const { localName, childNodes } = child;

				if (this._isCustomElement(child)) {
					if (!(localName in children)) {
						throw new Error(`There is no component named '${localName}'.`);
					}

					const props: Record<string, unknown> = this._mapAttributes(child.attributes);
					if (childNodes.length) {
						props.children = child.innerHTML;
					}

					const component = new children[localName](props, { children, events });
					parentElement.appendChild(component.element);
				} else {
					parentElement.appendChild(this.compile(child.outerHTML, children, events));
				}
			});

			fragment.append(parentElement);
		}

		return fragment.firstElementChild as HTMLElement;
	}

	private _toXml(str: string) {
		return this._parse.parseFromString(str, 'text/xml');
	}

	private _toHtml(str: string) {
		return this._parse.parseFromString(str, 'text/html').body.children;
	}

	private _isCustomElement(element: Element) {
		return /^[A-Z]/.test(element.localName);
	}

	private _isElement(element: any): element is Element {
		return element.nodeName !== '#text';
	}

	private _mapAttributes(attributes: NamedNodeMap) {
		return [...attributes].reduce((props, attr) => ({ ...props, [attr.name]: attr.value }), {});
	}
}

export default new Template();
