import Component from '@/core/component';

import { Avatar } from '@/components';

import clsx from '@/utils/clsx';
import connect from '@/utils/connect';

class Details extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		const { className, user = {} } = this.props;

		const cls = clsx('details', className);

		return `
		<div class="${cls}">
			<Avatar size="130px" />
			<ul class="list">
				<li class="d-flex f-jc-sb">
					<span>Email</span>
					<span class="details__value">${user.email ?? '-'}</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Login</span>
					<span class="details__value">${user.login ?? '-'}</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Name</span>
					<span class="details__value">${user.first_name ?? '-'}</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Last name</span>
					<span class="details__value">${user.second_name ?? '-'}</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Name in chat</span>
					<span class="details__value">${user.display_name ?? '-'}</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Phone</span>
					<span class="details__value">${user.phone ?? '-'}</span>
				</li>
			</ul>
		</div>
		`;
	}
}

export default connect(Details, (state) => ({ user: state.user }));
