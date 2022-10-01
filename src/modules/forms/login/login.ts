import Component, { DefaultProps } from '../../../core/component';

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

		super(template, Component.setChildrenInProps(props, login, password, button));
	}
}
