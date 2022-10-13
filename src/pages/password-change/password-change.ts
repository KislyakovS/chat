import Component from '../../core/component';

import { Profile as Layout } from '../../layouts';

import { PasswordChangeForm } from '../../modules/forms';

export default class PasswordChange extends Component {
	protected children() {
		return { Layout, PasswordChangeForm };
	}

	render() {
		return `
		<Layout>
			<PasswordChangeForm />
		</Layout>
		`;
	}
}
