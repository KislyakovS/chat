import Component from '../../core/component';

export default class Field extends Component {
	render() {
		return `<label class="field">
			<input class="field__input" type="${this.props.type}" name="${this.props.name}" placeholder="${this.props.placeholder}" />
		</label>`;
	}
}
