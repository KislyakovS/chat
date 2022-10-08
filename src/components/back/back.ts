import Component from '../../core/component';

import IconButton from '../icon-button';

import template from './back.tmpl';

export default class Back extends Component {
	constructor() {
		super(template, { children: [new IconButton({ icon: 'arrow-left', href: '/' })] });
	}
}
