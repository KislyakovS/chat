import Component from '../../core/component';

import clsx from '../../utils/clsx';

export default class Box extends Component {
	render() {
		const { className, children, isCenter } = this.props;

		const cls = clsx('box', className, { box_center: isCenter });

		return `
		<div class="${cls}">${children}</div>
		`;
	}
}
