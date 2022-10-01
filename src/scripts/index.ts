// import Login from '../modules/forms/login';
// import Box from '../components/box';
// import H1 from '../components/h1';
// import Link from '../components/link';

import Login from '../pages/login/login';

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

main.append(login.element);

// eslint-disable-next-line max-len
// main.append(blog.element, avatar.element, back.element, h1.element, changeAvatar.element, field.element, login.element);
// main.append(login.element, signUp.element);
