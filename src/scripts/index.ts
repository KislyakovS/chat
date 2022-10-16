import { SignUp, Login } from '../pages';
import router from '../core/router';

const app = document.querySelector('#app') as HTMLElement;

router
	.use('/', new Login())
	.use('/sign-up', new SignUp())
	.start(app);
