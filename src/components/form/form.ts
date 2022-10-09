import Component from '../../core/component';

export default class Form extends Component {
	render() {
		return `
		<form class="form ${this.props.isTable ? 'form_table' : ''}" onSubmit="${this.props.onSubmit}">
			${this.props.children}
		</form>
		`;
	}
}
