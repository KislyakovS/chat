import Page from '@/core/page';

import { Profile as Layout } from '@/layouts';

import { PasswordChangeForm } from '@/modules/forms';

export default class PasswordChange extends Page {
	get meta() {
		return {
			title: 'Change password',
			description: 'Change Profile password.',
		};
	}

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
