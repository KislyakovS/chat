import Component from '../../core/component';

import Back from '../../components/back';
import PasswordChangeForm from '../../modules/forms/password-change';

export default class PasswordChange extends Component {
	protected children() {
		return { Back, PasswordChangeForm };
	}

	render() {
		return `
		<div class="page-personal">
			<Back />
			<section class="page-personal__content">
				<PasswordChangeForm />
			</section>
		</div>
		`;
	}
}
