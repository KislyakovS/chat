import Component, { DefaultProps } from '../../core/component';

import Form from '../../components/form';
import Button from '../../components/button';
import Field from '../../components/field';

import template from './login-form.tmpl';

type Props = DefaultProps;

export default class LoginForm extends Component<Props> {
	constructor() {
		const login = new Field({
			error: 'Invalid login',
			placeholder: 'Login',
			name: 'login',
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
			text: 'Sign in',
		});

		const form = new Form({
			className: 'w-100',
			children: [login, password, button],
			events: {
				submit: (e) => {
					e.preventDefault();
					console.log({
						login: login.value,
						password: password.value,
					});
				},
			},
		});

		super(template, { children: [form] });
	}
}
