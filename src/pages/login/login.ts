import Component from '../../core/component';

import LoginForm from '../../modules/forms/login';

import template from './login.tmpl';

export default class Login extends Component {
	constructor() {
		super(template, { children: [new LoginForm()] });
	}
}
