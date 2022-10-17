import {
 SignUp, Login, Messager, PersonalChange, PasswordChange, Personal,
} from '../pages';
import router from '../core/router';

const app = document.querySelector('#app') as HTMLElement;

router
	.use('/', Login)
	.use('/sign-up', SignUp)
	.use('/messenger', Messager)
	.use('/personal', Personal)
	.use('/settings', PersonalChange)
	.use('/password', PasswordChange)
	.start(app);
