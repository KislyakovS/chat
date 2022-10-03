import Component, { DefaultProps } from '../../core/component';

import LoginForm from '../../modules/login-form';

import template from './login.tmpl';

export default class Login extends Component<DefaultProps> {
	constructor() {
		super(template, { children: [new LoginForm()] });
	}
}
