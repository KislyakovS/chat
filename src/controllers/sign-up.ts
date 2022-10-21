import authAPI from '../api/auth';

import router from '../core/router';

import isErrorResponse from '../utils/is-error-response';
import {
	isUserName, isLogin, isEmail, isRuMobilePhone, isPassword,
} from '../utils/validator';

import type { SignUpModel } from '../modules/forms/sign-up';

class SignUpController {
	public async signUp(data: SignUpModel) {
		if (!this._isValid(data)) {
			throw new Error('The form data is entered incorrectly.');
		}

		await this._request(data);
	}

	private async _request(data: SignUpModel) {
		const response = await authAPI.signUp(data);

		if (isErrorResponse(response)) {
			throw new Error(response.reason);
		}

		router.go('/messager');
	}

	private _isValid(data: SignUpModel) {
		return isUserName(data.first_name)
			&& isUserName(data.second_name)
			&& isEmail(data.email)
			&& isRuMobilePhone(data.phone)
			&& isLogin(data.login)
			&& isPassword(data.password);
	}
}

export default new SignUpController();
