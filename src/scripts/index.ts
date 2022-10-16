import {
 SignUp, Login, Messager, PersonalChange, PasswordChange, Personal,
} from '../pages';
import router from '../core/router';

const app = document.querySelector('#app') as HTMLElement;

router
	.use('/', new Login())
	.use('/sign-up', new SignUp())
	.use('/messenger', new Messager())
	.use('/personal', new Personal())
	.use('/settings', new PersonalChange())
	.use('/password', new PasswordChange())
	.start(app);
