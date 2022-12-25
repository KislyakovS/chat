import { profileAPI } from '../api';

import isErrorResponse from '../utils/is-error-response';
import { isPassword } from '../utils/validator';

import type { PasswordChangeModel } from '../modules/forms/password-change';

class PasswordChangeController {
	public async change(data: PasswordChangeModel) {
		if (!this._isValid(data)) {
			throw new Error('The form data is entered incorrectly.');
		}

		await this._request(data);
	}

	private async _request(data: PasswordChangeModel) {
		const response = await profileAPI.changePassword(data);

		if (isErrorResponse(response)) {
			throw new Error(response.reason);
		}
	}

	private _isValid(data: PasswordChangeModel) {
		return isPassword(data.newPassword)
		&& isPassword(data.oldPassword)
		&& isPassword(data.repeatPassword)
		&& data.newPassword === data.repeatPassword;
	}
}

export default new PasswordChangeController();
