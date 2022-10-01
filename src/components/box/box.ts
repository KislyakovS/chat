import Component, { DefaultProps } from '../../core/component';

import template from './box.tmpl';

type Props = DefaultProps & {
	className?: string,
	width?: `${number}px`,
	height?: `${number}px`,
	isCenter?: boolean
};

export default class Box extends Component<Props> {
	constructor(props: Props = {}) {
		super(template, props);
	}
}
