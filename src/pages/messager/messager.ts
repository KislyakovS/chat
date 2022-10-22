import Page from '../../core/page';

import {
 User, Search, Messages,
} from './components';

import Dialogs from '../../modules/dialogs';
import { SendMessageForm } from '../../modules/forms';

export default class Messager extends Page {
	get meta() {
		return {
			title: 'Messager',
			description: 'You messager.',
		};
	}

	protected children() {
		return {
 User, Search, Dialogs, Messages, SendMessageForm,
};
	}

	render() {
		return `
		<div class="messager">
			<aside class="messager__aside">
				<User name="Alexandr" />
				<div class="messager__search">
					<Search />
				</div>
				<Dialogs />
			</aside>
			<section class="messager__chat">
				<header class="messager__header">
					<User name="Misha" />
				</header>
				<div class="messager__main">
					<Messages />
				</div>
				<footer class="messager__footer">
					<SendMessageForm />
				</footer>
			</section>
		</div>
		`;
	}
}
