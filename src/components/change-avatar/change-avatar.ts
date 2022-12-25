import Component from '@/core/component';

import Avatar from '../avatar';

import clsx from '@/utils/clsx';

export default class ChangeAvatar extends Component {
	protected children() {
		return { Avatar };
	}

	render() {
		const { className } = this.props;

		const cls = clsx('change-avatar', className);

		return `
		<div class="${cls}">
			<button class="reset change-avatar__button" type="button">
				<Avatar size="130px" />
				<div class="change-avatar__overlay">Поменять аватар</div>
			</button>
		</div>
		`;
	}
}
