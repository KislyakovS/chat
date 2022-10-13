import Component from '../../core/component';

import clsx from '../../utils/clsx';

export default class Form extends Component {
	render() {
		const { isTable, onSubmit, children, className } = this.props;

		const cls = clsx('form', className, { form_table: isTable });

		return `
		<form class="${cls}" onSubmit="${onSubmit}">
			${children}
		</form>
		`;
	}
}
