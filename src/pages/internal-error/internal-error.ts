import Page from '@/core/page';

import { ErrorMessagePage } from '@/components';

export default class InternalError extends Page {
	get meta() {
		return {
			title: 'The problem arose with us :(',
			description: 'This is our problem. We will fix it soon :(',
		};
	}
	protected children() {
		return { ErrorMessagePage };
	}

	render() {
		return '<ErrorMessagePage status="500" message="We are already fixing"  />';
	}
}
