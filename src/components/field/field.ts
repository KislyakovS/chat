import Component, { DefaultProps } from '../../core/component';

import type { InputType } from '../../types';

import template from './field.tmpl';

type Props = DefaultProps & {
	className?: string,
	label?: string,
	hasError?: boolean,
	error: string,
	type?: InputType,
	placeholder: string,
	name: string,
	isRow?: boolean,
};

export default class Field extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}

	get value() {
		const input = this.element.querySelector('input') as HTMLInputElement;

		return input.value;
	}
}
