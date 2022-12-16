import profileAPI from '../api/profile';

import router from '../core/router';
import store from '../core/store';

import isErrorResponse from '../utils/is-error-response';
import { Routes } from '../constants';

class ProfileController {
	public async requestProfile() {
		const response = await profileAPI.get();

		if (isErrorResponse(response)) {
			router.go(Routes.login);
		}

		store.set('user', response);
	}
}

export default new ProfileController();
