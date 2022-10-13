import Component from '../../../../core/component';

import { Link } from '../../../../components';

export default class Navigation extends Component {
	protected children() {
		return { Link };
	}

	render() {
		return `
		<nav>
			<ul class="list">
				<li><Link>Change Data</Link></li>
				<li><Link>Change Password</Link></li>
				<li><Link isAccent="true">Exit</Link></li>
			</ul>
		</nav>
		`;
	}
}
