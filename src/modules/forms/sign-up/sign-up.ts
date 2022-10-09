import Component from '../../../core/component';

import Form from '../../../components/form';
import Field from '../../../components/field';
import Button from '../../../components/button';

export default class SignUpForm extends Component {
	onSubmit(e: Event) {
		e.preventDefault();

		console.log('Submit sign-up form');
	}

	protected children() {
		return { Form, Field, Button };
	}

	protected events() {
		return { onSubmit: this.onSubmit };
	}

	render() {
		return `
			<Form>
				<Field type="email" name="email" placeholder="Email" />
				<Field type="text" name="login" placeholder="Login" />
				<Field type="text" name="first_name" placeholder="Name" />
				<Field type="text" name="second_name" placeholder="Second name" />
				<Field type="tel" name="phone" placeholder="Phone" />
				<Field type="password" name="password" placeholder="Password" />
				<Button class="w-100">Sign up</Button>
			</Form>
		`;
	}
}
