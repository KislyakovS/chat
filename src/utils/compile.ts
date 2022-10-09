import { v4 as uuidv4 } from 'uuid';

class DOM {
	public createElement(template, children, events) {
		return new DOMParser().parseFromString(this._compile(template, children, events).outerHTML, 'text/html').body.children[0] as HTMLElement;
	}

	private _isCapitalizeFirstLetter(string: string) {
		return /^[A-Z]/.test(string);
	}

	private _compile(template, children, events) {
		const { firstElementChild } = new DOMParser().parseFromString(template, 'text/xml');

		if (!firstElementChild) {
			throw new Error('');
		}

		[...firstElementChild.children].forEach((child) => {
			const { localName, childElementCount, childNodes } = child;

			if (this._isCapitalizeFirstLetter(localName)) {
				const props: Record<string, unknown> = [...child.attributes]
					.reduce((acc, it) => ({ ...acc, [it.name]: it.value }), {});
				if (childNodes.length) {
					props.children = child.innerHTML;
				}

				const component = new children[localName]({ props, children });

				child.replaceWith(
					// eslint-disable-next-line max-len
					this._compile(component.render(), { ...children, ...component.getChildren() }, component.getEvents()),
				);
			} else if (childElementCount) {
				child.replaceWith(
					this._compile(child.outerHTML, children, events),
				);
			}
    	});

		this._setEvents(firstElementChild, events);
		[...firstElementChild.children].forEach((child) => this._setEvents(child, events));

		return firstElementChild;
	}

	private _setEvents(child, events) {
		const eventAttributes = [...child.attributes].filter((it) => /^on/.test(it.name)).map((it) => it.name);
			eventAttributes.forEach((attr) => {
				if (child.hasAttribute(attr)) {
					const eventId = uuidv4();
					const listener = events[child.getAttribute(attr)];

					child.removeAttribute(attr);
					child.setAttribute('event-id', eventId);

					document.body.addEventListener(attr.slice(2).toLowerCase(), (e) => {
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

export default new DOM();
