import Component from '../../core/component';

import Dialog from './dialog';

export default class Dialogs extends Component {
	protected children() {
		return { Dialog };
	}

	render() {
		const dialogs = [{ name: 'Misha', message: 'Hello!', count: 10 }, { name: 'Max', message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', count: 5 }];

		return `
		<ol class="dialogs reset">
			${dialogs.map((dialog) => `<li><Dialog name="${dialog.name}" message="${dialog.message}" count="${dialog.count}" /></li>`).join('')}
		</ol>
		`;
	}
}
