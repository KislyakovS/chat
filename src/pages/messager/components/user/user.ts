import Component, { DefaultProps } from '../../../../core/component';

import Avatar from '../../../../components/avatar';

import template from './user.tmpl';

type Props = DefaultProps & {
	className?: string,
	name: string
}

export default class User extends Component<DefaultProps> {
	constructor(props: Props) {
		super(template, Component.setChildrenInProps(props, new Avatar({ size: '35px' })));
	}
}
