import Component, { Events } from '../../../core/component';

import {
	Form, Field, Button, ErrorMessage,
} from '../../../components';

import { loginController } from '../../../controllers';

import formSerialize from '../../../utils/form-serialize';
import connect from '../../../utils/connect';

export type LoginModel = {
	login: string,
	password: string,
}

type State = {
	error?: string
}

class LoginForm extends Component<Record<string, unknown>, State> {
	private async _onSubmit(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		try {
			await loginController.login(formSerialize<LoginModel>(form));
		} catch (error) {
			this.state.error = error.message;
		}
	}

	protected children() {
		return {
			Form, Field, Button, ErrorMessage,
		};
	}

	protected events(): Events {
		return [{ name: 'submit', listener: this._onSubmit.bind(this) }];
	}

	private get _hasError() {
		return Boolean(this.state.error?.trim());
	}

	render() {
		return `
		<Form onSubmit="${this._onSubmit.name}">
			<Field type="text" name="login" placeholder="Login" />
			<Field type="password" name="password" placeholder="Password" />
			<Button className="w-100" type="submit">Sign in</Button>
			${this._hasError ? `<ErrorMessage className="mt-20">${this.state.error}</ErrorMessage>` : ''}
		</Form>
		`;
	}
}

export default connect(LoginForm, (state) => ({ user: state.user }));
