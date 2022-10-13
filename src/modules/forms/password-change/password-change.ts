import Component from '../../../core/component';

import { Form, Field, Button } from '../../../components';

export default class PasswordChangeForm extends Component {
	protected children() {
		return { Form, Field, Button };
	}

	render() {
		return `
		<Form isTable="true">
			<Field label="Old password" isRow="true" type="password" name="old_password" placeholder="Old password" />
			<Field label="New password" isRow="true" type="password" name="new_password" placeholder="New password" />
			<Field label="Repeat the new password" isRow="true" type="password" name="repeat_password" placeholder="Repeat password" />
			<Button className="w-100">Save</Button>
		</Form>
		`;
	}
}
