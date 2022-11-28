import store, { StoreEventName } from '../core/store';

// TODO: Normal types!!!!
export default (Component: any, mapStateToProps: (state: any) => any) => class extends Component {
	constructor(props: any = {}, ...args: any[]) {
		const fullProps = { ...mapStateToProps(store.state), ...props };

		super(fullProps, ...args);

		store.on(StoreEventName.update, (state) => {
			this.setProps(mapStateToProps(state));
		});
	}
};
