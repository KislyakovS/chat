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
				<Details className="mb-40" />
				<Navigation />
			</section>
		</div>
		`;
	}
}
