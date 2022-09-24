import Component, { DefaultProps } from '../../core/component';

import type { ButtonType } from '../../types';

import template from './icon-button.tmpl';

type Props = DefaultProps & {
	href?: string,
	icon: 'arrow-left' | 'arrow-right',
	type?: ButtonType,
};

export default class IconButton extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
