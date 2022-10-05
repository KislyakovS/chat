import Component, { DefaultProps } from '../../core/component';

import LoginForm from '../../modules/forms/login';

import template from './login.tmpl';

export default class Login extends Component<DefaultProps> {
	constructor() {
		super(template, { children: [new LoginForm()] });
	}
}
