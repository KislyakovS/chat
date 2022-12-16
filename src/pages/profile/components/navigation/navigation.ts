import Component, { Events } from '../../../../core/component';

import { Link, Button } from '../../../../components';

import { logoutController } from '../../../../controllers';
import { Routes } from '../../../../constants';

export default class Navigation extends Component {
	private async _onClickButtonExit(e: Event) {
		e.preventDefault();

		await logoutController.logout();
	}

	protected children() {
		return { Link, Button };
	}

	protected events(): Events {
		return [{ name: 'click', listener: this._onClickButtonExit.bind(this) }];
	}

	render() {
		return `
		<nav>
			<ul class="list">
				<li><Link href="${Routes.settings}">Change Data</Link></li>
				<li><Link href="${Routes.password}">Change Password</Link></li>
				<li><Button style="link-accent" onClick="${this._onClickButtonExit.name}">Exit</Button></li>
			</ul>
		</nav>
		`;
	}
}
