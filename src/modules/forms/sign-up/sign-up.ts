import Component from '../../../core/component';

import {
	Form, Field, Button, ErrorMessage,
} from '../../../components';

import { signUpController } from '../../../controllers';

import formSerialize from '../../../utils/form-serialize';

export type SignUpModel = {
	first_name: string,
	second_name: string,
	login: string,
	email: string,
	phone: string,
	password: string
}

type State = {
	error?: string
}

export default class SignUpForm extends Component<Record<string, unknown>, State> {
	private async _onSubmit(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		try {
			await signUpController.signUp(formSerialize<SignUpModel>(form));
		} catch (error) {
			this.state.error = error.message;
		}
	}

	protected children() {
		return {
			Form, Field, Button, ErrorMessage,
		};
	}

	protected listeners() {
		return { onSubmit: this._onSubmit.bind(this) };
	}

	private get _hasError() {
		return Boolean(this.state.error?.trim());
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
				${this._hasError ? `<ErrorMessage className="mt-20">${this.state.error}</ErrorMessage>` : ''}
			</Form>
		`;
	}
}
