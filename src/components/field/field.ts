import Component from '../../core/component';

import clsx from '../../utils/clsx';

export default class Field extends Component {
	render() {
		const {
			isRow, label, type, name, placeholder,
		} = this.props;

		const cls = clsx('field', { field_row: isRow });

		return `
		<label class="${cls}">
			${label ? `<span class="field__label">${label}</span>` : ''}
			<input class="field__input" type="${type}" name="${name}" placeholder="${placeholder}" />
		</label>`;
	}
}
