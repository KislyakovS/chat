import Component from '../../../core/component';

import Form from '../../../components/form';
import Field from '../../../components/field';
import IconButton from '../../../components/icon-button';

import template from './send-message.tmpl';

export default class SendMessageForm extends Component {
	constructor() {
		const field = new Field({
			className: 'send-message-form__field',
			name: 'message',
			placeholder: 'Message',
			error: 'not mess',
		});
		const button = new IconButton({ type: 'submit', icon: 'arrow-right' });
		const form = new Form({
			className: 'send-message-form',
			children: [field, button],
			events: {
				submit: (e) => {
					e.preventDefault();
					console.dir({
						message: field.value,
					});
				},
			},
		});

		super(template, { children: [form] });
	}
}
