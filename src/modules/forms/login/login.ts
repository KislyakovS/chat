import Component from '../../../core/component';

import Field from '../../../components/field';
import Button from '../../../components/button';

export default class LoginForm extends Component {
	onSubmit(e: Event) {
		e.preventDefault();

		console.log('Submit');
	}

	protected children() {
		return { Field, Button };
	}

	protected events() {
		return { onSubmit: this.onSubmit };
	}

	render() {
		return `
		<form class="form" onSubmit="onSubmit">
			<Field type="text" name="login" placeholder="Login" />
			<Field type="password" name="password" placeholder="Password" />
			<Button class="w-100">Sign in</Button>
		</form>
		`;
	}
}
