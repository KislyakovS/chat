import EventBus from './event-bus';

import set from '../utils/set';
import get from '../utils/get';

export enum StoreEventName {
	update = 'update'
}

class Store extends EventBus<StoreEventName> {
	private _state = {};

	public set(path: string, value: unknown) {
		set(this._state, path, value);

		this.emite(StoreEventName.update, this._state);
	}

	public get(path: string) {
		return get(this._state, path);
	}
}

export default new Store();
