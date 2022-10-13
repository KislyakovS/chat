import Component from '../../../core/component';

import { Form, ChangeAvatar, Field, Button } from '../../../components';

export default class PersonalChangeForm extends Component {
	protected children() {
		return {
			Form, ChangeAvatar, Field, Button,
		};
	}

	render() {
		return `
		<Form isTable="true">
			<ChangeAvatar className="mb-40" />
			<Field label="Email" isRow="true" type="email" name="email" placeholder="Email" />
			<Field label="Login" isRow="true" type="text" name="login" placeholder="Login" />
			<Field label="Name" isRow="true" type="text" name="first_name" placeholder="Name" />
			<Field label="Second Name" isRow="true" type="text" name="second_name" placeholder="Second name" />
			<Field label="Name in chat" isRow="true" type="text" name="display_name" placeholder="Name in chat" />
			<Field label="Phone" isRow="true" type="tel" name="phone" placeholder="Phone" />
			<Button className="w-100">Save</Button>
		</Form>
		`;
	}
}
