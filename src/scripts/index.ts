import { SignUp } from '../pages';

const app = document.querySelector('#app') as HTMLElement;

app.append(new SignUp().element);
