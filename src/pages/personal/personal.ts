import Component from '../../core/component';

import Back from '../../components/back';
import Details from './components/details';
import Navigation from './components/navigation';

import template from './personal.tmpl';

export default class Personal extends Component {
	constructor() {
		super(template, { children: [new Back(), new Details(), new Navigation()] });
	}
}
