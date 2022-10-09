// import Component, { DefaultProps } from '../../../../core/component';

// import Avatar from '../../../../components/avatar';

// import template from './user.tmpl';

// type Props = DefaultProps & {
// 	className?: string,
// 	name: string
// }

// export default class User extends Component<Props> {
// 	constructor(props: Props) {
// 		super(template, { ...props, children: [new Avatar({ size: '35px' })] });
// 	}
// }

import Component from '../../../../core/component';

import Avatar from '../../../../components/avatar';

export default class User extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		return `
		<a>
			<Avatar size="35px" />
			<span>${this.props.name}</span>
		</a>
		`;
	}
}
