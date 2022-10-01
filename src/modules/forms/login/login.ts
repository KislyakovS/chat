import Component, { DefaultProps } from '../../../core/component';

import Form from '../../../components/form';
import Button from '../../../components/button';
import Field from '../../../components/field';

import template from './login.tmpl';

type Props = DefaultProps & {
	className?: string
};

export default class Login extends Component<Props> {
	constructor(props: Props = {}) {
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
			type: 'submit',
			text: 'Sign in',
		});

		const form = new Form({
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

		super(template, Component.setChildrenInProps(props, form));
	}
}
