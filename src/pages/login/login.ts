import Component, { DefaultProps } from '../../core/component';

import Box from '../../components/box';
import H1 from '../../components/h1';
import LoginForm from '../../modules/forms/login';
import Link from '../../components/link';

import template from './login.tmpl';

export default class Login extends Component<DefaultProps> {
	constructor() {
		const title = new H1({
			className: 'mb-40',
			title: 'Sign in',
		});
		const loginForm = new LoginForm();
		const link = new Link({
			className: 'mt-15',
			href: '/',
			text: 'Create profile',
		});
		const box = new Box({
			className: 'd-flex f-column f-ai-c',
			children: [title, loginForm, link],
			isCenter: true,
		});

		super(template, { children: [box] });
	}
}
