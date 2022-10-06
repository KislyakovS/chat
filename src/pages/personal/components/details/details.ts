import Component, { DefaultProps } from '../../../../core/component';

import Avatar from '../../../../components/avatar';

import template from './details.tmpl';

type Props = DefaultProps & {
	className?: string,
	data: { label: string, value: string }[]
}

export default class Details extends Component<Props> {
	constructor() {
		super(template, {
			data: [{ label: 'Email', value: 'pochta@yandex.ru' }, { label: 'Login', value: 'ivanivanov' }, { label: 'Name', value: 'ivan' }, { label: 'Last name', value: 'ivanov' }, { label: 'Name in chat', value: 'ivan-2000' }, { label: 'Phone', value: '+7 (909) 967 30 30' }],
			children: [new Avatar({ size: '130px' })],
		});
	}
}
