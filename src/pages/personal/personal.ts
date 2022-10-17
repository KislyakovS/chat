import Page from '../../core/page';

import { Profile as Layout } from '../../layouts';

import { Details, Navigation } from './components';

export default class Personal extends Page {
	get meta() {
		return {
			title: 'Personal',
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
