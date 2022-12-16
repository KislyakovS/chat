import Page from '../../core/page';

import { Profile as Layout } from '../../layouts';

import { Details, Navigation } from './components';

export default class Profile extends Page {
	get meta() {
		return {
			title: 'Profile',
			description: 'Profile Information and Setup.',
		};
	}

	protected children() {
		return { Layout, Details, Navigation };
	}

	render(): string {
		return `
		<Layout>
			<Details className="mb-40" />
			<Navigation />
		</Layout>
		`;
	}
}
