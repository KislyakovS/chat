import { authAPI } from '../api';

import router from '../core/router';

import { Routes } from '../constants';

class LogoutController {
	public async logout() {
		await authAPI.logout();

		router.go(Routes.login);
	}
}

export default new LogoutController();
