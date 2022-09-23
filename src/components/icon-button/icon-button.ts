import Component, { DefaultProps } from '../../core/component';

import template from './icon-button.tmpl';

type Props = DefaultProps & {
	href?: string,
	icon: 'arrow-left' | 'arrow-right',
	type?: 'button' | 'submit' | 'reset',
};

export default class IconButton extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
