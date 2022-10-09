// import {
// 	Login, SignUp, NotFound, InternalError, PasswordChange, Personal, PersonalChange, Messager,
//  } from '../pages';

// const app = document.querySelector('#app') as HTMLElement;

// app.append(new PersonalChange().element);

import Login from '../pages/login';

const app = document.querySelector('#app') as HTMLElement;

app.append(new Login().element);
