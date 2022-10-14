import Component from '../../core/component';

import clsx from '../../utils/clsx';

type Props = {
	className?: string,
	href: string,
	isAccent?: boolean,
	children: string
}

export default class Link extends Component<Props> {
	render() {
		const {
			isAccent, className, href, children,
		} = this.props;

		const cls = clsx('link', { link_accent: isAccent }, className);

		return `<a class="${cls}" href="${href}">${children}</a>`;
	}
}
