import Component, { DefaultProps } from '../../core/component';

import IconButton from '../icon-button';

import template from './back.tmpl';

type Props = DefaultProps;

export default class Back extends Component<Props> {
	constructor(props: Props = {}) {
		super(template, Component.setChildrenInProps(props, new IconButton({ icon: 'arrow-left', href: '/' })));
	}
}
