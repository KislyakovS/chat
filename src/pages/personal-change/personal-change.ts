import Page from '../../core/page';

import { Profile as Layout } from '../../layouts';

import { PersonalChangeForm } from '../../modules/forms';

export default class PersonalChange extends Page {
	get meta() {
		return {
			title: 'Change profile data',
			description: 'Change profile data.',
		};
	}

	protected children() {
		return { Layout, PersonalChangeForm };
	}

	render() {
		return `
		<Layout>
			<PersonalChangeForm />
		</Layout>
		`;
	}
}
