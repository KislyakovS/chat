import http from '../core/http';

import type { User, ErrorResponse } from '../types';
import type { ProfileChangeModel } from '../modules/forms/profile-change';
import type { PasswordChangeModel } from '../modules/forms/password-change';

class ProfileAPI {
	public get() {
		return http.get<User | ErrorResponse>('/auth/user', { isCredentials: true });
	}

	public changeData(data: ProfileChangeModel) {
		return http.put<User | ErrorResponse>('/user/profile', { data });
	}

	public changePassword(data: PasswordChangeModel) {
		return http.put<void | ErrorResponse>('/user/password', { data });
	}
}

export default new ProfileAPI();
