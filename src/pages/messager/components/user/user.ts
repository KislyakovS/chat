import Component, { DefaultProps } from '../../../../core/component';

import Avatar from '../../../../components/avatar';

import template from './user.tmpl';

type Props = DefaultProps & {
	className?: string,
	name: string
}

export default class User extends Component<Props> {
	constructor(props: Props) {
		super(template, { ...props, children: [new Avatar({ size: '35px' })] });
	}
}
