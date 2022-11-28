import Component from '../../../../core/component';

import { Avatar, Link } from '../../../../components';

export default class User extends Component {
	protected children() {
		return { Avatar, Link };
	}

	render() {
		const { name, href } = this.props;

		return `
		<Link className="user" href="${href}">
			<Avatar size="35px" />
			<span>${name}</span>
		</Link>
		`;
	}
}
