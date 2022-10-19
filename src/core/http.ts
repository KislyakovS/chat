import type { HTTPMethod } from '../types';

type Options = {
	header?: Record<string, string>,
	data?: Record<string, unknown>,
}

type OptionsWithData = Options & Required<Pick<Options, 'data'>>;
type OptionsWithoutData = Omit<Options, 'data'>;
type Url = string;

class HTTP {
	public get<T>(url: Url, options?: OptionsWithoutData) {
		return this._request<T>(url, 'GET', options);
	}

	public post<T>(url: Url, options: OptionsWithData) {
		return this._request<T>(url, 'POST', options);
	}

	public put<T>(url: Url, options?: OptionsWithData) {
		return this._request<T>(url, 'PUT', options);
	}

	public delete<T>(url: Url, options?: OptionsWithoutData) {
		return this._request<T>(url, 'DELETE', options);
	}

	private _request<T>(url: Url, method: HTTPMethod, options?: Options) {
		return new Promise<T>((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.open(method, url);

			if (options?.header) {
				Object.entries(options.header).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			xhr.addEventListener('load', () => {
				resolve(JSON.parse(xhr.response));
			});

			xhr.addEventListener('error', reject);
			xhr.addEventListener('abort', reject);
			xhr.addEventListener('timeout', reject);

			if (options?.data) {
				xhr.send(JSON.stringify(options.data));
			} else {
				xhr.send();
			}
		});
	}
}

export default new HTTP();
