import { compile } from 'pug';
import Component, { DefaultProps } from '../core/component';

export default <T extends Pick<DefaultProps, 'children'>>(template: string, props: T) => {
	const fragment = document.createElement('template');

	const childrenInComponent: Component<DefaultProps>[] = [];
	const childrenInBlock: Component<DefaultProps>[] = [];

	props.children?.forEach((child) => {
		if (template.includes(`+${child.constructor.name}`)) {
			childrenInComponent.push(child);
		} else {
			childrenInBlock.push(child);
		}
	});

	childrenInComponent.forEach((child) => {
		template = template.replace(`+${child.constructor.name}`, `<div data-id="${child.id}"></div>`);
	});

	template = template.replace('+block', childrenInBlock.map((child) => `<div data-id="${child.id}"></div>`).join(''));

	fragment.innerHTML = compile(template)(props);

	props.children?.forEach((child) => {
		const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

		if (stub) {
			stub.replaceWith(child.element);
		}
	});

	return fragment.content.children[0] as HTMLElement;
};
