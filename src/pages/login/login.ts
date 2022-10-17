import Page from '../../core/page';

import { Box, Link } from '../../components';
import { LoginForm } from '../../modules/forms';

export default class Login extends Page {
	get meta() {
		return {
			title: 'Sign in',
			description: 'Sign in chat.',
		};
	}
	protected children() {
		return { Box, LoginForm, Link };
	}

	render() {
		return `
		<Box isCenter="true">
			<h1 class="title text-center mb-40">Sign in</h1>
			<LoginForm />
			<Link className="mt-15 d-block text-center" href="/sign-up">Create profile</Link>
		</Box>
		`;
	}
}
