import type { VoidFunction } from '../types';

export enum EventName {
	init = 'init'
}

type Listeners = Record<string, VoidFunction[]>;

class EventBus {
	private listeners: Listeners = {};

	private notEventInListeners(eventName: EventName) {
		return !this.listeners[eventName];
	}

	private throwErrorNoEvent(eventName: EventName): never {
		throw new Error(`There is no event named '${eventName}'`);
	}

	public on(eventName: EventName, callback: VoidFunction) {
		if (this.notEventInListeners(eventName)) {
			this.listeners[eventName] = [];
		}

		this.listeners[eventName].push(callback);
	}

	public off(eventName: EventName, callback: VoidFunction) {
		if (this.notEventInListeners(eventName)) {
			this.throwErrorNoEvent(eventName);
		}

		this.listeners[eventName] = this.listeners[eventName].filter(
			(listener) => listener !== callback,
		);
	}

	public emite(eventName: EventName, ...args: unknown[]) {
		if (this.notEventInListeners(eventName)) {
			this.throwErrorNoEvent(eventName);
		}

		this.listeners[eventName].forEach((listener) => listener(...args));
	}
}

export default new EventBus();
