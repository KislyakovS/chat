import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import InternalError from '../pages/internal-error';
import NotFound from '../pages/not-found';
import PersonalChange from '../pages/personal-change';
import PasswordChange from '../pages/password-change';
import Personal from '../pages/personal';

const app = document.querySelector('#app') as HTMLElement;

app.append(new Personal().element);
