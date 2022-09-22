import Component, { DefaultProps } from '../../core/component';

import template from './button.tmpl';

type Props = DefaultProps & {
	href?: string,
	type?: 'button' | 'submit' | 'reset',
	isRound?: boolean,
	text: string,
}

export default class Button extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
