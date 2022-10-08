import Component from '../../../core/component';

import Form from '../../../components/form';
import Button from '../../../components/button';
import Field from '../../../components/field';
import ChangeAvatar from '../../../components/change-avatar';

import template from './personal-change.tmpl';

export default class PersonalChangeForm extends Component {
	constructor() {
		const avatar = new ChangeAvatar({ className: 'mb-40' });

		const email = new Field({
			label: 'Email',
			type: 'email',
			error: 'Invalid email',
			placeholder: 'pochta@yandex.ru',
			name: 'email',
			isRow: true,
		});
		const login = new Field({
			label: 'Login',
			error: 'Invalid login',
			placeholder: 'ivanivanov',
			name: 'login',
			isRow: true,
		});
		const name = new Field({
			label: 'Name',
			error: 'Invalid name',
			placeholder: 'ivan',
			name: 'first_name',
			isRow: true,
		});
		const lastName = new Field({
			label: 'Last name',
			error: 'Invalid last name',
			placeholder: 'ivanov',
			name: 'second_name',
			isRow: true,
		});
		const nameInChat = new Field({
			label: 'Name in chat',
			error: 'Invalid name in chat',
			placeholder: 'ivan-2000',
			name: 'display_name',
			isRow: true,
		});
		const phone = new Field({
			label: 'Phone',
			type: 'tel',
			error: 'Invalid phone',
			placeholder: '+7 (909) 967 30 30',
			name: 'phone',
			isRow: true,
		});
		const button = new Button({
			className: 'w-100',
			type: 'submit',
			text: 'Save',
		});

		const form = new Form({
			children: [avatar, email, login, name, lastName, nameInChat, phone, button],
			isTable: true,
			events: {
				submit: (e) => {
					e.preventDefault();
					console.log({
						email: email.value,
						login: login.value,
						name: name.value,
						lastName: lastName.value,
						nameInChat: nameInChat.value,
						phone: phone.value,
					});
				},
			},
		});

		super(template, { children: [avatar, form] });
	}
}
