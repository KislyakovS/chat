import Component from '../../core/component';

export default class Form extends Component {
	render() {
		return `
		<form class="form">
			${this.props.children}
		</form>
		`;
	}
}
