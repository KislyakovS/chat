// import Component from '../../core/component';

// import Back from '../../components/back';
// import PersonalChangeForm from '../../modules/forms/personal-change';

// import template from './personal-change.tmpl';

// export default class PersonalChange extends Component {
// 	constructor() {
// 		super(template, { children: [new Back(), new PersonalChangeForm()] });
// 	}
// }

import Component from '../../core/component';

import Back from '../../components/back';
import PersonalChangeForm from '../../modules/forms/personal-change';

export default class PersonalChange extends Component {
	protected children() {
		return { Back, PersonalChangeForm };
	}

	render() {
		return `
		<div class="page-personal">
			<Back />
			<section class="page-personal__content">
				<PersonalChangeForm />
			</section>
		</div>
		`;
	}
}
