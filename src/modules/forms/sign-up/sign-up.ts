import Component from '../../../core/component';

import Form from '../../../components/form';
import Button from '../../../components/button';
import Field from '../../../components/field';

import template from './sign-up.tmpl';

export default class SignUpForm extends Component {
	constructor() {
		const email = new Field({
			error: 'Invalid mail',
			type: 'email',
			placeholder: 'Email',
			name: 'email',
		});
		const login = new Field({
			error: 'Invalid login',
			placeholder: 'Login',
			name: 'login',
		});
		const name = new Field({
			error: 'Invalid name',
			placeholder: 'Name',
			name: 'first_name',
		});
		const lastName = new Field({
			error: 'Invalid second name',
			placeholder: 'Last Name',
			name: 'second_name',
		});
		const phone = new Field({
			error: 'Invalid phone',
			type: 'tel',
			placeholder: 'Phone',
			name: 'phone',
		});
		const password = new Field({
			error: 'Invalid password',
			type: 'password',
			placeholder: 'Password',
			name: 'password',
		});
		const button = new Button({
			className: 'w-100',
			type: 'submit',
			text: 'Sign up',
		});

		const form = new Form({
			children: [email, login, name, lastName, phone, password, button],
			events: {
				submit: (e) => {
					e.preventDefault();
					console.log({
						email: email.value,
						login: login.value,
						name: name.value,
						lastName: lastName.value,
						phone: phone.value,
						password: password.value,
					});
				},
			},
		});

		super(template, { children: [form] });
	}
}
