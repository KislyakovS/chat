import Component from '../../../../core/component';

import Message from './message';

import clsx from '../../../../utils/clsx';

export default class Messages extends Component {
	protected children() {
		return { Message };
	}

	render() {
		const messages = [{ text: 'Hello', time: '10:20', isIncoming: true }, { text: 'Hello!', time: '11:20', isIncoming: false }];

		return `
		<ol class="messages reset">
			${messages.map((message) => `<li class="${clsx('messages__item', { 'messages__item_side-right': message.isIncoming })}">
				<Message text="${message.text}" time="${message.time}" isIncoming="${message.isIncoming}" />
			</li>`).join('')}
		</ol>
		`;
	}
}
