import Component from '../../core/component';
import router from '../../core/router';

import IconButton from '../icon-button';

export default class Back extends Component {
	onClickBack(e: Event) {
		e.preventDefault();

		router.back();
	}

	protected children() {
		return { IconButton };
	}

	protected listeners() {
		return { onClickBack: this.onClickBack };
	}

	render() {
		return `
		<div class="back">
			<IconButton onClick="onClickBack" icon="arrow-left" />
		</div>
		`;
	}
}
