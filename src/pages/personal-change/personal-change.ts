import Component from '../../core/component';

import Back from '../../components/back';
import PersonalChangeForm from '../../modules/forms/personal-change';

import template from './personal-change.tmpl';

export default class PersonalChange extends Component {
	constructor() {
		super(template, { children: [new Back(), new PersonalChangeForm()] });
	}
}
