import Component from '../../../../core/component';

import clsx from '../../../../utils/clsx';

export default class Message extends Component {
	render() {
		const { text, time, isIncoming } = this.props;

		const cls = clsx('message', { 'message_incoming': isIncoming === 'true' })

		return `
		<div class="${cls}">
			<p class="message__text">${text}</p>
			<time class="message__time">${time}</time>
		</div>
		`;
	}
}