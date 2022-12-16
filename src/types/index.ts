export type VoidFunction = (...args: unknown[]) => void;
export type ElementEventName = keyof HTMLElementEventMap;
export type ButtonType = 'button' | 'submit' | 'reset';
export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Path = `/${string}`;
export type Constructor<T> = new (...args: unknown[]) => T;
export type ErrorResponse = { reason: string }
export type User = {
	id: number,
	first_name: string,
	second_name: string,
	display_name: string,
	login: string,
	email: string,
	phone: string,
	avatar: string,
}
