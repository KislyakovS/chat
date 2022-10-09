// import Component from '../../../../core/component';

// import template from './search.tmpl';

// export default class Search extends Component {
// 	constructor() {
// 		super(template);
// 	}
// }

import Component from '../../../../core/component';

export default class Search extends Component {
	render(): string {
		return '<input class="search" type="search" placeholder="Search..." />';
	}
}
