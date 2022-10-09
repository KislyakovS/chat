import Component from '../../core/component';

export default class Avatar extends Component {
	render() {
		const { size, src } = this.props;

		return `<img class="avatar" style="width: ${size}; height: ${size}" src="${src}" />`;
	}
}
