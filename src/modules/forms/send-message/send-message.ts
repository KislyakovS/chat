import Component from '@/core/component';

import { Form, Field, IconButton } from '@/components';

export default class SendMessageForm extends Component {
	onSubmit(e: Event) {
		e.preventDefault();

		console.log('Submit message form');
	}

	protected children() {
		return { Form, Field, IconButton };
	}

	protected listeners() {
		return { onSubmit: this.onSubmit };
	}

	render() {
		return `
		<Form className="send-message-form" onSubmit="onSubmit">
			<Field className="send-message-form__field" type="text" name="message" placeholder="Message..." />
			<IconButton icon="arrow-right" />
		</Form>
		`;
	}
}
