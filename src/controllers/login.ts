import { authAPI } from '../api';

import router from '../core/router';

import isErrorResponse from '../utils/is-error-response';
import { isLogin, isPassword } from '../utils/validator';

import { Routes } from '../constants';
import type { LoginModel } from '../modules/forms/login';

class LoginController {
	public async login(data: LoginModel) {
		if (!this._isValid(data)) {
			throw new Error('Login or password is incorrect.');
		}

		await this._request(data);
	}

	private async _request(data: LoginModel) {
		const response = await authAPI.login(data);

		if (isErrorResponse(response)) {
			throw new Error(response.reason);
		}

		router.go(Routes.messenger);
	}

	private _isValid(data: LoginModel) {
		return isLogin(data.login) && isPassword(data.password);
	}
}

export default new LoginController();
