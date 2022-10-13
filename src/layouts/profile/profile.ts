import Component from '../../core/component';

import { Back } from '../../components';

export default class Profile extends Component {
	protected children() {
		return { Back };
	}

	render() {
		return `
		<div class="profile-layout">
			<Back />
			<section class="profile-layout__content">
				${this.props.children}
			</section>
		</div>
		`;
	}
}