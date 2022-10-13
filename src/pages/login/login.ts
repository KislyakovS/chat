import Component from '../../core/component';

import { Link } from '../../components';
import { LoginForm } from '../../modules/forms';

export default class Login extends Component {
	protected children() {
		return { LoginForm, Link };
	}

	render() {
		return `
		<div class="box box_center">
			<h1 class="title text-center mb-40">Sign in</h1>
			<LoginForm />
			<Link className="mt-15 d-block text-center" href="/">Create profile</Link>
		</div>
		`;
	}
}
