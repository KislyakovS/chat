import {
  SignUp, Login, Messager, ProfileChange, PasswordChange, Profile, NotFound,
} from '@/pages';
import router from '@/core/router';
import http from '@/core/http';

import { Routes } from '@/constants';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('No root element by id `app`');
}

if (import.meta.env.CLIENT_API_URL) {
  http.setup({ baseURL: import.meta.env.CLIENT_API_URL });
}

router
  .use(Routes.login, Login)
  .use(Routes.signUp, SignUp)
  .use(Routes.messenger, Messager)
  .use(Routes.profile, Profile)
  .use(Routes.settings, ProfileChange)
  .use(Routes.password, PasswordChange)
  .notFound(NotFound)
  .start(app);
