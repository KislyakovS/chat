import Page from '@/core/page';

import { Profile as Layout } from '@/layouts';

import { ProfileChangeForm } from '@/modules/forms';

export default class ProfileChange extends Page {
	get meta() {
		return {
			title: 'Change profile data',
			description: 'Change profile data.',
		};
	}

	protected children() {
		return { Layout, ProfileChangeForm };
	}

	render() {
		return `
		<Layout>
			<ProfileChangeForm />
		</Layout>
		`;
	}
}
