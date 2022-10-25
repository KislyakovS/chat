import EventBus from './event-bus';

import set from '../utils/set';
import get from '../utils/get';

export enum EventName {
	update = 'update'
}

class Store extends EventBus<EventName> {
	private _state = {};

	public set(path: string, value: unknown) {
		set(this._state, path, value);

		this.emite(EventName.update);
	}
	public get(path: string) {
		return get(this._state, path);
	}
}

export default new Store();
