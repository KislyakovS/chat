import {
	Login, SignUp, NotFound, InternalError, PasswordChange, Personal, PersonalChange, Messager
 } from '../pages';

const app = document.querySelector('#app') as HTMLElement;

app.append(new Messager().element);
