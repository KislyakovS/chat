import { v4 as uuidv4 } from 'uuid';

import type { Children } from '../core/component';
import type { Listeners } from '../types';

class Template {
	parse = new DOMParser();

	public toDOM(template: Element) {
		return this.parse.parseFromString(template.outerHTML, 'text/html').body.children[0] as HTMLElement;
	}

	public compile(template: string, children: Children, listeners: Listeners) {
		const { firstElementChild } = this.parse.parseFromString(template, 'text/xml');

		if (!firstElementChild) {
			throw new Error('Template conversion error');
		}

		if (this._isCapitalizeFirstLetter(firstElementChild.localName)) {
			return this._compileClass(firstElementChild, children, listeners);
		}

		[...firstElementChild.children].forEach((element) => {
			const { localName, childElementCount } = element;

			if (this._isCapitalizeFirstLetter(localName)) {
				element.replaceWith(this._compileClass(element, children, listeners));
			} else if (childElementCount) {
				element.replaceWith(this.compile(element.outerHTML, children, listeners));
			}
		});

		this._setEventHandlers(firstElementChild, listeners);
		[...firstElementChild.children].forEach((child) => this._setEventHandlers(child, listeners));

		return firstElementChild;
	}

	private _compileClass(element: Element, children: Children, listeners: Listeners) {
		const { localName, childNodes } = element;

		const props: Record<string, unknown> = this._mapAttributesProps(element.attributes);
		if (childNodes.length) {
			props.children = element.innerHTML;
		}

		const component = new children[localName](props, { children, listeners });

		return component.template;
	}

	private _isCapitalizeFirstLetter(string: string) {
		return /^[A-Z]/.test(string);
	}

	private _mapAttributesProps(attributes: NamedNodeMap) {
		return [...attributes].reduce((props, attr) => ({ ...props, [attr.name]: attr.value }), {});
	}

	private _setEventHandlers(child: Element, listeners: Listeners) {
		const eventAttributes = [...child.attributes].filter((it) => /^on/.test(it.name)).map((it) => it.name);
			eventAttributes.forEach((attr) => {
				const eventName = child.getAttribute(attr);

				if (!eventName) {
					return;
				}

				const eventId = uuidv4();
				const listener = listeners[eventName];

				child.removeAttribute(attr);
				child.setAttribute('event-id', eventId);

				document.body.addEventListener(attr.slice(2).toLowerCase(), (e) => {
					const target = e.target as HTMLElement;
					const isCurrentElement = target.closest(`[event-id="${eventId}"]`);

					if (isCurrentElement && listener) {
						listener(e);
					}
				});
			});
	}
}

export default new Template();
