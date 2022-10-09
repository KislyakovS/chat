// import Component, { DefaultProps } from '../../core/component';

// import Avatar from '../avatar';

// import template from './change-avatar.tmpl';

// type Props = DefaultProps & {
// 	className?: string,
// };

// export default class ChangeAvatar extends Component<Props> {
// 	constructor(props: Props = {}) {
// 		super(template, { ...props, children: [new Avatar({ size: '130px' })] });
// 	}
// }

import Component from '../../core/component';

import Avatar from '../avatar';

export default class ChangeAvatar extends Component {
	protected children(): Record<string, unknown> {
		return { Avatar };
	}

	render() {
		return `
		<div class="change-avatar ${this.props.class}">
			<button class="reset change-avatar__button" type="button">
				<Avatar size="130px" />
				<div class="change-avatar__overlay">Поменять аватар</div>
			</button>
		</div>
		`;
	}
}
