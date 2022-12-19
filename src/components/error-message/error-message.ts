import Component from '@/core/component';

import clsx from '@/utils/clsx';

type Props = {
	className?: string,
	children: string,
}

export default class ErrorMessage extends Component<Props> {
	render() {
		const { className, children } = this.props;

		const cls = clsx('error-message', className);

		return `<div class="${cls}">${children}</div>`;
	}
}
