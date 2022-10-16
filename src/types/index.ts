export type VoidFunction = (...args: unknown[]) => void;
export type ElementEventName = keyof HTMLElementEventMap;
export type ButtonType = 'button' | 'submit' | 'reset';
export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Listeners = Record<string, EventListener>;
export type Path = `/${string}`;
export interface Type<T> extends Function {
    new (...args: unknown[]): T;
}
