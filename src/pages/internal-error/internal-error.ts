import Component from '../../core/component';

import { ErrorMessagePage } from '../../components';

export default class InternalError extends Component {
	protected children() {
		return { ErrorMessagePage };
	}

	render() {
		return '<ErrorMessagePage status="500" message="We are already fixing"  />';
	}
}
