import Component from '../../core/component';

import { Profile as Layout } from '../../layouts';

import { PersonalChangeForm } from '../../modules/forms';

export default class PersonalChange extends Component {
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
