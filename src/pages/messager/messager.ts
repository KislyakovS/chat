import Component from '../../core/component';

import User from './components/user';
import Search from './components/search';
import Dialogs from './components/dialogs';
import Messages from './components/messages';
import SendMessageForm from '../../modules/forms/send-message';

import template from './messager.tmpl';

export default class Messager extends Component {
	constructor() {
		super(template, {
 children: [
			new User({ name: 'Alexandr' }),
			new Search(),
			new User({ name: 'Ivan' }),
			new Dialogs(),
			new Messages(),
			new SendMessageForm(),
		],
});
	}
}
