import Component from '../../../core/component';

import { Form, Field, Button } from '../../../components';

export default class SignUpForm extends Component {
	onSubmit(e: Event) {
		e.preventDefault();

		console.log('Submit sign-up form');
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
				<Field type="email" name="email" placeholder="Email" />
				<Field type="text" name="login" placeholder="Login" />
				<Field type="text" name="first_name" placeholder="Name" />
				<Field type="text" name="second_name" placeholder="Second name" />
				<Field type="tel" name="phone" placeholder="Phone" />
				<Field type="password" name="password" placeholder="Password" />
				<Button className="w-100">Sign up</Button>
			</Form>
		`;
	}
}
