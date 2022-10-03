// import Login from '../modules/forms/login';
// import Box from '../components/box';
// import H1 from '../components/h1';
// import Link from '../components/link';

import Login from '../pages/login';
import SignUp from '../pages/sign-up';

const main = document.querySelector('main') as HTMLElement;
main.classList.remove('h-100', 'd-flex');
main.innerHTML = '';

// const link = new Link({
// 	href: '/',
// 	text: 'Hello',
// 	className: 'wqeqweq',
// 	isAccent: true,
// });

const login = new Login();
const signUp = new SignUp();

main.append(signUp.element);

// eslint-disable-next-line max-len
// main.append(blog.element, avatar.element, back.element, h1.element, changeAvatar.element, field.element, login.element);
// main.append(login.element, signUp.element);
