import Component from '../../core/component';

import clsx from '../../utils/clsx';

export default class Button extends Component {
	render() {
		const { className, children } = this.props;

		const cls = clsx('button', className);

		return `
		<button class="${cls}">
			${children}
		</button>
		`;
	}
}
