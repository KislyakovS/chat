import Component, { DefaultProps } from '../../../core/component';

import Form from '../../../components/form';
import Button from '../../../components/button';
import Field from '../../../components/field';

import template from './password-change.tmpl';

export default class PasswordChangeForm extends Component<DefaultProps> {
	constructor() {
		const oldPassword = new Field({
			label: 'Old password',
			type: 'password',
			error: 'Invalid password',
			placeholder: 'old password',
			name: 'old_password',
			isRow: true,
		});
		const newPassword = new Field({
			label: 'New password',
			error: 'Invalid password',
			type: 'password',
			placeholder: 'New password',
			name: 'new_password',
			isRow: true,
		});
		const repeatPassword = new Field({
			label: 'Repeat the new password',
			error: 'Invalid password',
			type: 'password',
			placeholder: 'Repeat password',
			name: 'repeat_password',
			isRow: true,
		});
		const button = new Button({
			className: 'w-100',
			type: 'submit',
			text: 'Save',
		});

		const form = new Form({
			children: [oldPassword, newPassword, repeatPassword, button],
			isTable: true,
			events: {
				submit: (e) => {
					e.preventDefault();
					console.log({
						oldPassword: oldPassword.value,
						newPassword: newPassword.value,
						repeatPassword: repeatPassword.value,
					});
				},
			},
		});

		super(template, { children: [form] });
	}
}
