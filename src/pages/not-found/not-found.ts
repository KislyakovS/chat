import Page from '@/core/page';

import { ErrorMessagePage } from '@/components';

export default class NotFound extends Page {
	get meta() {
		return {
			title: 'Not found :(',
			description: 'We could not find this page :(',
		};
	}

	protected children() {
		return { ErrorMessagePage };
	}

	render() {
		return '<ErrorMessagePage status="404" message="Got it wrong" />';
	}
}
