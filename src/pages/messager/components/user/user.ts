import Component from '../../../../core/component';

import { Avatar } from '../../../../components';

export default class User extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		const { name, href } = this.props;

		return `
		<a class="user" href="${href}">
			<Avatar size="35px" />
			<span>${name}</span>
		</a>
		`;
	}
}
