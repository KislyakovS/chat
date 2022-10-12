import Component from '../../../../core/component';

import Avatar from '../../../../components/avatar';

export default class User extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		return `
		<a class="user">
			<Avatar size="35px" />
			<span>${this.props.name}</span>
		</a>
		`;
	}
}
