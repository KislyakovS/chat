import type { VoidFunction } from '../types';

type Listeners = Record<string, VoidFunction[]>;

export default class EventBus<T extends string> {
	private listeners: Listeners = {};

	private _notEventInListeners(eventName: T) {
		return !this.listeners[eventName];
	}

	private _throwErrorNoEvent(eventName: T): never {
		throw new Error(`There is no event named '${eventName}'`);
	}

	public on(eventName: T, callback: VoidFunction) {
		if (this._notEventInListeners(eventName)) {
			this.listeners[eventName] = [];
		}

		this.listeners[eventName].push(callback);
	}

	public off(eventName: T, callback: VoidFunction) {
		if (this._notEventInListeners(eventName)) {
			this._throwErrorNoEvent(eventName);
		}

		this.listeners[eventName] = this.listeners[eventName].filter(
			(listener) => listener !== callback,
		);
	}

	public emite(eventName: T, ...args: unknown[]) {
		if (this._notEventInListeners(eventName)) {
			this._throwErrorNoEvent(eventName);
		}

		this.listeners[eventName].forEach((listener) => listener(...args));
	}
}
