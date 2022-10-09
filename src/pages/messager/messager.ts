// import Component from '../../core/component';

// import User from './components/user';
// import Search from './components/search';
// import Dialogs from './components/dialogs';
// import Messages from './components/messages';
// import SendMessageForm from '../../modules/forms/send-message';

// import template from './messager.tmpl';

// export default class Messager extends Component {
// 	constructor() {
// 		super(template, {
//  children: [
// 			new User({ name: 'Alexandr' }),
// 			new Search(),
// 			new User({ name: 'Ivan' }),
// 			new Dialogs(),
// 			new Messages(),
// 			new SendMessageForm(),
// 		],
// });
// 	}
// }

import Component from '../../core/component';

import User from './components/user';
import Search from './components/search';

export default class Messager extends Component {
	protected children() {
		return { User, Search };
	}

	render() {
		return `
		<div class="messager">
			<aside class="messager__aside">
				<User name="Alexandr" />
				<div class="messager__search">
					<Search />
				</div>
			</aside>
			<section class="messager__chat">
				<header class="messager__header">
					<User name="Misha" />
				</header>
				<div class="messager__main"></div>
				<footer class="messager__footer"></footer>
			</section>
		</div>
		`;
	}
}
