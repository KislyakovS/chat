import Component from '../../core/component';

import clsx from '../../utils/clsx';

import type { ButtonType } from '../../types';

type Props = {
	className?: string,
	type?: ButtonType,
	children: string,
}

export default class Button extends Component<Props> {
	render() {
		const { className, type = 'button', children } = this.props;

		const cls = clsx('button', className);

		return `
		<button class="${cls}" type="${type}">
			${children}
		</button>
		`;
	}
}
