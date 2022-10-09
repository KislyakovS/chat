import Component from '../../core/component';

import SignUpForm from '../../modules/forms/sign-up';
import Link from '../../components/link';

export default class SignUp extends Component {
	protected children() {
		return { SignUpForm, Link };
	}

	render() {
		return `
		<div class="box box_center">
			<h1 class="title text-center mb-40">Sign up</h1>
			<SignUpForm />
			<Link className="mt-15 d-block text-center" href="/">Sign in</Link>
		</div>
		`;
	}
}
