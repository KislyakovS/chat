import Component, { DefaultProps } from '../../core/component';

import type { InputType } from '../../types';

import template from './field.tmpl';

type Props = DefaultProps & {
	className?: string,
	label?: string,
	error: string,
	type?: InputType,
	placeholder: string,
	name: string,
};

export default class Field extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
