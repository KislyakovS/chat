import {
 SignUp, Login, Messager, ProfileChange, PasswordChange, Profile, NotFound,
} from '../pages';
import router from '../core/router';
import http from '../core/http';

const app = document.querySelector('#app') as HTMLElement;

router
	.use('/', Login)
	.use('/sign-up', SignUp)
	.use('/messenger', Messager)
	.use('/profile', Profile)
	.use('/settings', ProfileChange)
	.use('/password', PasswordChange)
	.notFound(NotFound)
	.start(app);

if (process.env.CLIENT_API_URL) {
	http.setup({ baseURL: process.env.CLIENT_API_URL });
}
