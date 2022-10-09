// class DOM {
// 	public createElement(template, children, events) {
// 		return new DOMParser().parseFromString(this._compile(template, children, events).outerHTML, 'text/html').body.children[0] as HTMLElement;
// 	}

// 	private _isCapitalizeFirstLetter(string: string) {
// 		return /^[A-Z]/.test(string);
// 	}

// 	public compile(template, children, events) {
// 		const { firstElementChild } = new DOMParser().parseFromString(template, 'text/xml');

// 		if (!firstElementChild) {
// 			throw new Error('');
// 		}

// 		[...firstElementChild.children].forEach((child) => {
// 			const { localName, childElementCount, childNodes } = child;

// 			if (this._isCapitalizeFirstLetter(localName)) {
// 				const props: Record<string, unknown> = [...child.attributes]
// 					.reduce((acc, it) => ({ ...acc, [it.name]: it.value }), {});
// 				if (childNodes.length) {
// 					props.children = child.innerHTML;
// 				}

// 				const component = new children[localName]({ props, children });

// 				child.replaceWith(component.template);
// 			} else if (childElementCount) {
// 				child.replaceWith(
// 					this._compile(child.outerHTML, children, events),
// 				);
// 			}
//     	});

// 		this._setEvents(firstElementChild, events);
// 		[...firstElementChild.children].forEach((child) => this._setEvents(child, events));

// 		return firstElementChild;
// 	}

// 	private _setEvents(child, events) {
// 		const eventAttributes = [...child.attributes].filter((it) => /^on/.test(it.name)).map((it) => it.name);
// 			eventAttributes.forEach((attr) => {
// 				if (child.hasAttribute(attr)) {
// 					const eventId = uuidv4();
// 					const listener = events[child.getAttribute(attr)];

// 					child.removeAttribute(attr);
// 					child.setAttribute('event-id', eventId);

// 					document.body.addEventListener(attr.slice(2).toLowerCase(), (e) => {
// 						e.preventDefault();
// 						const { target } = e;
// 						const isCurrentElement = target.closest(`[event-id="${eventId}"]`) && target.tagName.toLowerCase() === child.tagName;

// 						if (isCurrentElement) {
// 							listener(e);
// 						}
// 					});
// 				}
// 			});
// 	}
// }

// export default new DOM();

import { v4 as uuidv4 } from 'uuid';

import Component from '../core/component';

class Template {
	parse = new DOMParser();

	public toDOM(template: Element) {
		return this.parse.parseFromString(template.outerHTML, 'text/html').body.children[0] as HTMLElement;
	}

	public compile(
		template: string,
		children: Record<string, any>,
		events: Record<string, EventListenerOrEventListenerObject>,
	) {
		const { firstElementChild } = this.parse.parseFromString(template, 'text/xml');

		if (!firstElementChild) {
			throw new Error('Template conversion error');
		}

		if (this._isCapitalizeFirstLetter(firstElementChild.localName)) {
			const { localName, childNodes } = firstElementChild;

			const props: Record<string, unknown> = this._mapAttributesProps(firstElementChild.attributes);
			if (childNodes.length) {
				props.children = firstElementChild.innerHTML;
			}

			const component = new children[localName]({ props, children });

			return component.template;
		}

		[...firstElementChild.children].forEach((element) => {
				const { localName, childNodes, childElementCount } = element;

				if (this._isCapitalizeFirstLetter(localName)) {
					const props: Record<string, unknown> = this._mapAttributesProps(element.attributes);
					if (childNodes.length) {
						props.children = element.innerHTML;
					}

					const component = new children[localName]({ props, children });

					element.replaceWith(component.template);
				} else if (childElementCount) {
					element.replaceWith(this.compile(element.outerHTML, children, events));
				}
			});

		return firstElementChild;
	}

	private _isCapitalizeFirstLetter(string: string) {
		return /^[A-Z]/.test(string);
	}

	private _mapAttributesProps(attributes: NamedNodeMap) {
		return [...attributes].reduce((props, attr) => ({...props, [attr.name]: attr.value }), {});
	}
}

export default new Template();
