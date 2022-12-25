import Component from '@/core/component';

import clsx from '@/utils/clsx';

export default class Avatar extends Component {
	render() {
		const { size, src, className } = this.props;

		const cls = clsx('avatar', className);

		return `<img class="${cls}" style="width: ${size}; height: ${size}" src="${src}" />`;
	}
}
