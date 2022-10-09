// import Component, { DefaultProps } from '../../../../core/component';

// import Avatar from '../../../../components/avatar';

// import template from './details.tmpl';

// type Props = DefaultProps & {
// 	className?: string,
// 	data: { label: string, value: string }[]
// }

// export default class Details extends Component<Props> {
// 	constructor() {
// 		super(template, {
// 			data: [{ label: 'Email', value: 'pochta@yandex.ru' }, { label: 'Login', value: 'ivanivanov' }, { label: 'Name', value: 'ivan' }, { label: 'Last name', value: 'ivanov' }, { label: 'Name in chat', value: 'ivan-2000' }, { label: 'Phone', value: '+7 (909) 967 30 30' }],
// 			children: [new Avatar({ size: '130px' })],
// 		});
// 	}
// }

import Component from '../../../../core/component';

import Avatar from '../../../../components/avatar';

export default class Details extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		return `
		<div class="details ${this.props.class}">
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
