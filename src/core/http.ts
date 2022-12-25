import type { HTTPMethod } from '../types';

import isJSON from '../utils/is-json';

type Params = Record<string, any>;
type Options = {
	header?: Record<string, string>,
	params?: Params
	data?: Record<string, any>,
	isCredentials?: boolean,
}
type Config = {
	baseURL: Url,
}
type OptionsWithData = Options & Required<Pick<Options, 'data'>>;
type OptionsWithoutData = Omit<Options, 'data'>;
type Url = string;

class HTTP {
	private _config?: Config;

	public setup(config: Config) {
		this._config = config;
	}

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

			let uri: string;

			if (options?.params) {
				uri = this._createUri(url, options?.params);
			} else {
				uri = this._createUri(url);
			}

			xhr.open(method, uri);

			if (options?.header) {
				Object.entries(options.header).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			if (options?.isCredentials) {
				xhr.withCredentials = true;
			}

			xhr.addEventListener('load', () => {
				if (isJSON(xhr.response)) {
					resolve(JSON.parse(xhr.response));
				} else {
					resolve(xhr.response);
				}
			});

			xhr.addEventListener('error', reject);
			xhr.addEventListener('abort', reject);
			xhr.addEventListener('timeout', reject);

			if (options?.data) {
				if (options.data instanceof FormData) {
					xhr.setRequestHeader('content-type', 'multipart/form-data');
					xhr.send(options.data);
				} else {
					xhr.setRequestHeader('content-type', 'application/json');
					xhr.send(JSON.stringify(options.data));
				}
			} else {
				xhr.send();
			}
		});
	}

	private _createUri(url: string, params: Params = {}) {
		const query = this._createQuery(params);
		url += query ? `?${query}` : '';

		if (this._hasHttpScheme(url)) {
			return url;
		}

		let baseUrl = window.location.origin;

		if (this._config?.baseURL) {
			baseUrl = this._config.baseURL;
		}

		return baseUrl + url;
	}

	private _createQuery(params: Params) {
		return new URLSearchParams(params).toString();
	}

	private _hasHttpScheme(url: string) {
		return /http(s):\/\//.test(url);
	}
}

export default new HTTP();
