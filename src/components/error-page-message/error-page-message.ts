import Component, { DefaultProps } from '../../core/component';

import template from './error-page-message.tmpl';

type Props = DefaultProps & {
	status: number,
	message: string
};

export default class ErrorPageMessage extends Component<Props> {
	constructor(props: Props) {
		super(template, props);
	}
}
