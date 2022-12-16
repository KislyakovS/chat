import Component, { Events } from '../../../core/component';

import {
 Form, ChangeAvatar, Field, Button, ErrorMessage,
} from '../../../components';

import { profileChangeController } from '../../../controllers';

import formSerialize from '../../../utils/form-serialize';

export type ProfileChangeModel = {
	first_name: string,
	second_name: string,
	display_name: string,
	login: string,
	email: string,
	phone: string
}

type State = {
	error?: string
}

export default class ProfileChangeForm extends Component<Record<string, unknown>, State> {
	private async _onSubmit(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		try {
			await profileChangeController.change(formSerialize<ProfileChangeModel>(form));
		} catch (error) {
			this.state.error = error.message;
		}
	}

	protected children() {
		return {
			Form, ChangeAvatar, Field, Button, ErrorMessage,
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
			<ChangeAvatar className="mb-40" />
			<Field label="Email" isRow="true" type="email" name="email" placeholder="Email" />
			<Field label="Login" isRow="true" type="text" name="login" placeholder="Login" />
			<Field label="Name" isRow="true" type="text" name="first_name" placeholder="Name" />
			<Field label="Second Name" isRow="true" type="text" name="second_name" placeholder="Second name" />
			<Field label="Name in chat" isRow="true" type="text" name="display_name" placeholder="Name in chat" />
			<Field label="Phone" isRow="true" type="tel" name="phone" placeholder="Phone" />
			<Button className="w-100" type="submit">Save</Button>
			${this._hasError ? `<ErrorMessage className="mt-20">${this.state.error}</ErrorMessage>` : ''}
		</Form>
		`;
	}
}
