import Component from '../../core/component';

import { ErrorMessagePage } from '../../components';

export default class NotFound extends Component {
	protected children() {
		return { ErrorMessagePage };
	}

	render() {
		return '<ErrorMessagePage status="404" message="Got it wrong" />';
	}
}
