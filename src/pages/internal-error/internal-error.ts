import Component, { DefaultProps } from '../../core/component';

import template from './internal-error.tmpl';

export default class InternalError extends Component<DefaultProps> {
	constructor() {
		super(template, {});
	}
}
