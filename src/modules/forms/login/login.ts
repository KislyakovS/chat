import Component from '../../../core/component';

import Form from '../../../components/form';
import Field from '../../../components/field';
import Button from '../../../components/button';

export default class LoginForm extends Component {
	onSubmit(e: Event) {
		e.preventDefault();

		console.log('Submit login form');
	}

	protected children() {
		return { Form, Field, Button };
	}

	protected listeners() {
		return { onSubmit: this.onSubmit };
	}

	render() {
		return `
		<Form onSubmit="onSubmit">
			<Field type="text" name="login" placeholder="Login" />
			<Field type="password" name="password" placeholder="Password" />
			<Button className="w-100">Sign in</Button>
		</Form>
		`;
	}
}
