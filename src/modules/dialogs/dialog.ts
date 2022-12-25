import Component from '@/core/component';

import { Avatar } from '@/components';

type Props = {
	name: string,
	message: string,
	count: number,
	children: never,
}

export default class Dialog extends Component<Props> {
	protected children() {
		return { Avatar };
	}

	render() {
		const { name, message, count } = this.props;

		return `
		<a class="dialog d-flex f-ai-c">
			<Avatar size="50px" className="dialog__avatar" />
			<div class="dialog__main f-grow">
				<header>
					<span class="dialog__name">${name}</span>
					<time class="dialog__time">10.10.2020</time>
				</header>
				<p class="dialog__preview">${message}</p>
				<span class="dialog__bage">${count}</span>
			</div>
		</a>
		`;
	}
}
