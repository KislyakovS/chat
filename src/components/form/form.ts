import Component, { DefaultProps } from '../../core/component';

import template from './form.tmpl';

type Props = DefaultProps & {
	className?: string,
	isTable?: boolean
};

export default class Form extends Component<Props> {
	constructor(props: Props = {}) {
		super(template, props);
	}
}
