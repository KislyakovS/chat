import Component from '../../core/component';

import Link from '../link';

export default class ErrorMessagePage extends Component {
	protected children() {
		return { Link };
	}

	render() {
		const { status, message } = this.props;

		return `
		<div class="error-page-message block-center">
			<span class="error-page-message__status">${status}</span>
			<h1 class="title error-page-message__text">${message}</h1>
			<Link href="/">Back to chats</Link>
		</div>
		`;
	}
}
