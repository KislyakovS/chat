import Component from '../../core/component';

import { User, Search, Dialogs, Messages } from './components';
import { SendMessageForm } from '../../modules/forms';

export default class Messager extends Component {
	protected children() {
		return { User, Search, Dialogs, Messages, SendMessageForm };
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
