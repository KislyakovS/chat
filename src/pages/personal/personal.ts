// import Component from '../../core/component';

// import Back from '../../components/back';
// import Details from './components/details';
// import Navigation from './components/navigation';

// import template from './personal.tmpl';

// export default class Personal extends Component {
// 	constructor() {
// 		super(template, { children: [new Back(), new Details(), new Navigation()] });
// 	}
// }

import Component from '../../core/component';

import Back from '../../components/back';
import Details from './components/details';
import Navigation from './components/navigation';

export default class Personal extends Component {
	protected children() {
		return { Back, Details, Navigation };
	}

	render() {
		return `
		<div class="page-personal">
			<Back />
			<section class="page-personal__content">
				<Details class="mb-40" />
				<Navigation />
			</section>
		</div>
		`;
	}
}
