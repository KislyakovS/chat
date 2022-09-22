import { compile } from 'pug';
import type { DefaultProps } from '../core/component';

export default <T extends Pick<DefaultProps, 'children'>>(template: string, props: T) => {
	const fragment = document.createElement('template');

	props.children?.forEach((child) => {
		template = template.replace(`+${child.constructor.name}`, `<div data-id="${child.id}"></div>`);
	});

	fragment.innerHTML = compile(template)(props);

	props.children?.forEach((child) => {
		const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

		if (stub) {
			stub.replaceWith(child.element);
		}
	});

	return fragment.content.children[0] as HTMLElement;
};
