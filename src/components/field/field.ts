import Component from '../../core/component';

export default class Field extends Component {
	render() {
		return `<label class="field ${this.props.isRow ? 'field_row' : ''}">
			${this.props.label ? `<span class="field__label">${this.props.label}</span>` : ''}
			<input class="field__input" type="${this.props.type}" name="${this.props.name}" placeholder="${this.props.placeholder}" />
		</label>`;
	}
}
