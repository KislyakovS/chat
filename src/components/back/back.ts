import Component from '../../core/component';

import IconButton from '../icon-button';

export default class Back extends Component {
	protected children() {
		return { IconButton };
	}

	render() {
		return `
		<div class="back">
			<IconButton icon="arrow-left" />
		</div>
		`;
	}
}
