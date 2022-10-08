import Component, { DefaultProps } from '../../core/component';

import Avatar from '../avatar';

import template from './change-avatar.tmpl';

type Props = DefaultProps & {
	className?: string,
};

export default class ChangeAvatar extends Component<Props> {
	constructor(props: Props = {}) {
		super(template, { ...props, children: [new Avatar({ size: '130px' })] });
	}
}
