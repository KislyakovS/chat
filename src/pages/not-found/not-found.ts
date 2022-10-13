import Component from '../../core/component';

import { Link } from '../../components';

export default class NotFound extends Component {
	protected children() {
		return { Link };
	}

	render(): string {
		return `
		<div class="error-page-message block-center">
			<span class="error-page-message__status">404</span>
			<h1 class="title error-page-message__text">Got it wrong</h1>
			<Link href="/">Back to chats</Link>
		</div>
		`;
	}
}
