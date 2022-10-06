// import Login from '../modules/forms/login';
// import Box from '../components/box';
// import H1 from '../components/h1';
// import Link from '../components/link';

import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import NotFound from '../pages/not-found';
import InternalError from '../pages/internal-error';
import PasswordChange from '../pages/password-change';
import PersonalChange from '../pages/personal-change';
import Personal from '../pages/personal';
import Messager from '../pages/messager';

import Field from '../components/field';
import PasswordChangeForm from '../modules/forms/password-change';

const main = document.querySelector('main') as HTMLElement;
// main.classList.remove('h-100', 'd-flex');
// main.innerHTML = '';

// const link = new Link({
// 	href: '/',
// 	text: 'Hello',
// 	className: 'wqeqweq',
// 	isAccent: true,
// });

const login = new Login();
const signUp = new SignUp();
const notFound = new NotFound();
const internalError = new InternalError();

const passwordChangeForm = new PasswordChangeForm();

const field = new Field({
	label: 'Old password',
	type: 'password',
	error: 'No passwor',
	placeholder: 'passwor',
	name: 'qewqeqweq',
	isRow: true,
 });

 const field2 = new Field({
	label: 'New password',
	error: 'No passwor',
	type: 'password',
	placeholder: 'qweqw',
	name: 'wqeqwe',
	isRow: true,
 });

 const passwordChange = new PasswordChange();

 const personal = new Personal();

 const messager = new Messager();

main.classList.remove('h-100', 'd-flex');
main.innerHTML = '';
main.append(messager.element);

//  main.append(personal.element);

//  main.append(passwordChange.element);

// main.append(new PersonalChange().element);

// main.append(field.element, field2.element);
// main.append(passwordChangeForm.element);



// main.append(internalError.element);
// main.append(signUp.element);

// eslint-disable-next-line max-len
// main.append(blog.element, avatar.element, back.element, h1.element, changeAvatar.element, field.element, login.element);
// main.append(login.element, signUp.element);
