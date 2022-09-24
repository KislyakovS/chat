import Component, { DefaultProps } from '../../core/component';

import template from './h1.tmpl';

type Props = DefaultProps & {
	className?: string,
	title: string
};

export default class H1 extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
