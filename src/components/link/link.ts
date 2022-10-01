import Component, { DefaultProps } from '../../core/component';

import template from './link.tmpl';

type Props = DefaultProps & {
	className?: string,
	isAccent?: boolean,
	text: string,
	href: string,
};

export default class Link extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
