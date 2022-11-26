import store, { StoreEventName } from '../core/store';

// TODO: Normal types!!!!
export default (Component: any, mapStateToProps: (state: any) => any) => class extends Component {
	constructor(...args: unknown[]) {
		super(...args);

		store.on(StoreEventName.update, (state) => {
			this.setProps(mapStateToProps(state));
		});
	}
};
