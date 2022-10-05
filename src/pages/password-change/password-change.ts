import Component, { DefaultProps } from '../../core/component';

import Back from '../../components/back';
import PasswordChangeForm from '../../modules/forms/password-change';

import template from './password-change.tmpl';

export default class PasswordChange extends Component<DefaultProps> {
	constructor() {
		super(template, { children: [new Back(), new PasswordChangeForm()] });
	}
}