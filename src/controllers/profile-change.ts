import { profileAPI } from '../api';

import isErrorResponse from '../utils/is-error-response';
import {
	isUserName, isLogin, isEmail, isRuMobilePhone,
} from '../utils/validator';

import type { ProfileChangeModel } from '../modules/forms/profile-change';

class ProfileChangeController {
	public async change(data: ProfileChangeModel) {
		if (!this._isValid(data)) {
			throw new Error('The form data is entered incorrectly.');
		}

		await this._request(data);
	}

	private async _request(data: ProfileChangeModel) {
		const response = await profileAPI.changeData(data);

		if (isErrorResponse(response)) {
			throw new Error(response.reason);
		}
	}

	private _isValid(data: ProfileChangeModel) {
		return isUserName(data.first_name)
			&& isUserName(data.second_name)
			&& isEmail(data.email)
			&& isRuMobilePhone(data.phone)
			&& isLogin(data.display_name);
	}
}

export default new ProfileChangeController();
