import http from '@/core/http';

import type { ErrorResponse } from '@/types';
import type { LoginModel } from '@/modules/forms/login';
import type { SignUpModel } from '@/modules/forms/sign-up';

type ResponseSignUp = {
	id: number
}

class AuthAPI {
	public login(data: LoginModel) {
		return http.post<void | ErrorResponse>('/auth/signin', { isCredentials: true, data });
	}

	public signUp(data: SignUpModel) {
		return http.post<ResponseSignUp | ErrorResponse>('/auth/signup', { isCredentials: true, data });
	}

	public logout() {
		return http.post<void | ErrorResponse>('/auth/logout', { isCredentials: true, data: {} });
	}
}

export default new AuthAPI();
