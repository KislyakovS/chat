import Component from '../../core/component';

import Link from '../../components/link';

export default class InternalError extends Component {
	protected children() {
		return { Link };
	}

	render(): string {
		return `
		<div class="error-page-message block-center">
			<span class="error-page-message__status">500</span>
			<h1 class="title error-page-message__text">We are already fixing</h1>
			<Link href="/">Back to chats</Link>
		</div>
		`;
	}
}
