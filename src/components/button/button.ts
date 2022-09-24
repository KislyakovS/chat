import Component, { DefaultProps } from '../../core/component';

import type { ButtonType } from '../../types';

import template from './button.tmpl';

type Props = DefaultProps & {
	href?: string,
	type?: ButtonType,
	isRound?: boolean,
	text: string,
}

export default class Button extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
