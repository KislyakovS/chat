import Component, { Events } from '../../../core/component';

import {
	Form, Field, Button, ErrorMessage,
} from '../../../components';

import { passwordChangeController } from '../../../controllers';

import formSerialize from '../../../utils/form-serialize';

export type PasswordChangeModel = {
	oldPassword: string,
	newPassword: string,
	repeatPassword: string,
}

type State = {
	error?: string
}

export default class PasswordChangeForm extends Component<Record<string, unknown>, State> {
	private async _onSubmit(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		try {
			await passwordChangeController.change(formSerialize<PasswordChangeModel>(form));
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
		<Form isTable="true" onSubmit="${this._onSubmit.name}">
			<Field label="Old password" isRow="true" type="password" name="oldPassword" placeholder="Old password" />
			<Field label="New password" isRow="true" type="password" name="newPassword" placeholder="New password" />
			<Field label="Repeat the new password" isRow="true" type="password" name="repeatPassword" placeholder="Repeat password" />
			<Button className="w-100" type="submit">Save</Button>
			${this._hasError ? `<ErrorMessage className="mt-20">${this.state.error}</ErrorMessage>` : ''}
		</Form>
		`;
	}
}
