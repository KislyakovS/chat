import Component, { Events } from '@/core/component';
import router from '@/core/router';

import clsx from '@/utils/clsx';

import type { Path } from '@/types';

type Props = {
	className?: string,
	href: Path,
	isAccent?: boolean,
	children: string
}

export default class Link extends Component<Props> {
	private _onClickLink(e: Event) {
		e.preventDefault();

		router.go(this.props.href);
	}

	protected events(): Events {
		return [{ name: 'click', listener: this._onClickLink.bind(this) }];
	}

	render() {
		const {
			isAccent, className, href, children,
		} = this.props;

		const cls = clsx('link', { link_accent: isAccent }, className);

		return `<a class="${cls}" href="${href}" click="${this._onClickLink.name}">${children}</a>`;
	}
}
