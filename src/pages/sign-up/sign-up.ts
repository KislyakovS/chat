import Component, { DefaultProps } from '../../core/component';

import SignUpForm from '../../modules/sign-up-form';

import template from './sign-up.tmpl';

export default class SignUp extends Component<DefaultProps> {
	constructor() {
		super(template, { children: [new SignUpForm()] });
	}
}
