import Component from '@/core/component';

import clsx from '@/utils/clsx';

import type { ButtonType } from '@/types';

type Style = 'default' | 'link' | 'link-accent';

type Props = {
	className?: string,
	type?: ButtonType,
	children: string,
	style?: Style,
	onClick?: string,
}

export default class Button extends Component<Props> {
	render() {
		const {
			className, onClick, type = 'button', style = 'default', children,
		} = this.props;

		const cls = clsx('button', className, style !== 'default' && `button_${style}`);

		return `
		<button class="${cls}" type="${type}" click="${onClick}">
			${children}
		</button>
		`;
	}
}
