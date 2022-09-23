import IconButton from '../icon-button';
import Component, { DefaultProps } from '../../core/component';

import template from './back.tmpl';

type Props = DefaultProps;

export default class Back extends Component<Props> {
	constructor(props: Props = {}) {
		if (!props.children) {
			props.children = [];
		}

		props.children.push(new IconButton({ icon: 'arrow-left', href: '/' }));

		super(template, props);
	}
}
