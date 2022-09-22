import Component, { DefaultProps } from '../../core/component';

import template from './avatar.tmpl';

type Props = DefaultProps & {
	size?: `${number}px`,
	src?: string
}

export default class Avatar extends Component<Props> {
	constructor(props: Props = {}) {
		super(template, props);
	}
}
