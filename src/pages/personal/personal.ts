import Component from '../../core/component';

import { Profile as Layout } from '../../layouts';

import { Details, Navigation } from './components';

export default class Personal extends Component {
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
