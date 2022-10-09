import { v4 as uuidv4 } from 'uuid';

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
			return this._compileClass(firstElementChild, children, events);
		}

		[...firstElementChild.children].forEach((element) => {
			const { localName, childElementCount } = element;

			if (this._isCapitalizeFirstLetter(localName)) {
				element.replaceWith(this._compileClass(element, children, events));
			} else if (childElementCount) {
				element.replaceWith(this.compile(element.outerHTML, children, events));
			}
		});

		this._setEventHandlers(firstElementChild, events);
		[...firstElementChild.children].forEach((child) => this._setEventHandlers(child, events));

		return firstElementChild;
	}

	// eslint-disable-next-line max-len
	private _compileClass(element: Element, children: Record<string, unknown>, events: Record<string, EventListenerOrEventListenerObject>) {
		const { localName, childNodes } = element;

		const props: Record<string, unknown> = this._mapAttributesProps(element.attributes);
		if (childNodes.length) {
			props.children = element.innerHTML;
		}

		const component = new children[localName]({ props, children, events });

		return component.template;
	}

	private _isCapitalizeFirstLetter(string: string) {
		return /^[A-Z]/.test(string);
	}

	private _mapAttributesProps(attributes: NamedNodeMap) {
		return [...attributes].reduce((props, attr) => ({...props, [attr.name]: attr.value }), {});
	}

	// eslint-disable-next-line max-len
	private _setEventHandlers(child: Element, events: Record<string, EventListenerOrEventListenerObject>) {
		const eventAttributes = [...child.attributes].filter((it) => /^on/.test(it.name)).map((it) => it.name);
			eventAttributes.forEach((attr) => {
				if (child.hasAttribute(attr)) {
					const eventId = uuidv4();
					const listener = events[child.getAttribute(attr)];

					console.log(events);

					child.removeAttribute(attr);
					child.setAttribute('event-id', eventId);

					document.body.addEventListener(attr.slice(2).toLowerCase(), (e) => {
						e.preventDefault();
						const { target } = e;
						const isCurrentElement = target.closest(`[event-id="${eventId}"]`) && target.tagName.toLowerCase() === child.tagName;

						if (isCurrentElement) {
							listener(e);
						}
					});
				}
			});
	}
}

export default new Template();
