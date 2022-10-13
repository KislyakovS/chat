import Component from '../../core/component';

import clsx from '../../utils/clsx';

export default class Link extends Component {
	render() {
		const {
			isAccent, className, href, children,
		} = this.props;

		const cls = clsx('link', { link_accent: isAccent }, className);

		return `<a class="${cls}" href="${href}">${children}</a>`;
	}
}
