import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import InternalError from '../pages/internal-error';
import NotFound from '../pages/not-found';

const app = document.querySelector('#app') as HTMLElement;

app.append(new NotFound().element);
