import store, { EventName as StoreEvent } from '../core/store';

// TODO: Normal types!!!!
export default (Component: any, mapStateToProps: (state: any) => any) => class extends Component {
	constructor(...args: unknown[]) {
		super(...args);

		store.on(StoreEvent.update, (state) => {
			this.setProps(mapStateToProps(state));
		});
	}
};
