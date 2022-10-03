import { compile } from 'pug';
import Component, { DefaultProps } from '../core/component';

const createStub = (id: string) => `<div data-id=${id}></div>`;

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
		template = template.replace(`+${child.constructor.name}`, createStub(child.id));
	});

	template = template.replace('+block', childrenInBlock.map((child) => createStub(child.id)).join(''));

	fragment.innerHTML = compile(template)(props);

	props.children?.forEach((child) => {
		const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

		if (stub) {
			stub.replaceWith(child.element);
		}
	});

	return fragment.content.children[0] as HTMLElement;
};
