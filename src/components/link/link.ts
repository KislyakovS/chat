// import Component, { DefaultProps } from '../../core/component';

// import template from './link.tmpl';

// type Props = DefaultProps & {
// 	className?: string,
// 	isAccent?: boolean,
// 	text: string,
// 	href: string,
// };

// export default class Link extends Component<Props> {
// 	constructor(props: Props) {
// 		super(template, props);
// 	}
// }

import Component from '../../core/component';

export default class Link extends Component {
	render(): string {
		return `<a class="link ${this.props.isAccent ? 'link_accent' : ''} ${this.props.class}" href="${this.props.href}">${this.props.children}</a>`;
	}
}
