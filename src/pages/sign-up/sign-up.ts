import Component from '../../core/component';

import { Box, Link } from '../../components';
import { SignUpForm } from '../../modules/forms';

export default class SignUp extends Component {
	protected children() {
		return { Box, SignUpForm, Link };
	}

	render() {
		return `
		<Box isCenter="true">
			<h1 class="title text-center mb-40">Sign up</h1>
			<SignUpForm />
			<Link className="mt-15 d-block text-center" href="/">Sign in</Link>
		</Box>
		`;
	}
}
