import profileAPI from '../api/profile';

import router from '../core/router';

import isErrorResponse from '../utils/is-error-response';

class ProfileController {
	public async requestProfile() {
		const response = await profileAPI.get();

		if (isErrorResponse(response)) {
			// throw new Error(response.reason);
			router.go('/');
		}

		console.log(response);
	}
}

export default new ProfileController();
