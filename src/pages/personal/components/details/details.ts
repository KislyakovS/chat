import Component from '../../../../core/component';

import Avatar from '../../../../components/avatar';

import clsx from '../../../../utils/clsx';

export default class Details extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		const { className } = this.props;

		const cls = clsx('details', className);

		return `
		<div class="${cls}">
			<Avatar size="130px" />
			<ul class="list">
				<li class="d-flex f-jc-sb">
					<span>Email</span>
					<span class="details__value">pochta@yandex.ru</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Login</span>
					<span class="details__value">ivanivanov</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Name</span>
					<span class="details__value">ivan</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Last name</span>
					<span class="details__value">ivanov</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Name in chat</span>
					<span class="details__value">ivan-2000</span>
				</li>
				<li class="d-flex f-jc-sb">
					<span>Phone</span>
					<span class="details__value">+7 (909) 967 30 30</span>
				</li>
			</ul>
		</div>
		`;
	}
}
