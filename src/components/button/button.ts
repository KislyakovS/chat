import Component, { DefaultProps } from '../../core/component';

import { compileTemplatePugToElement } from '../../utils';

import template from './button.tmpl';

type Props = DefaultProps & {
	href?: string,
	type?: 'button' | 'submit' | 'reset',
	isRound?: boolean,
	children: string,
}

export default class Button extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	protected render() {
		return compileTemplatePugToElement(template, this.props);
	}
}
