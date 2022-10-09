import Component from '../../core/component';

import LoginForm from '../../modules/forms/login';

export default class Login extends Component {
	protected children() {
		return { LoginForm };
	}

	render() {
		return `
		<div class="box box_center">
			<h1 class="title text-center mb-40">Sign in</h1>
			<LoginForm />
			<a class="link mt-15 d-block text-center">Create profile</a>
		</div>
		`;
	}
}
