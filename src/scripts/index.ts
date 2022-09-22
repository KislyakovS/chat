// import Button from '../components/button';

import Component from "../core/component";
import Button from "../components/button";

import type { DefaultProps } from "../core/component";

const template = `<div><h1>Hello</h1>+Button+Button+Button</div>`;

class Blog extends Component<DefaultProps> {
	constructor(props: DefaultProps) {
		super(template, props);
	}
}

const buttonEventClick = new Button({
	text: 'Click me!',
	events: {
		click: () => console.log('Click button!')
	}
});
const buttonLink = new Button({
	text: 'Link!',
	href: '/',
});
const buttonUpdate = new Button({
	text: 'Update first button',
	events: {
		click: () => buttonEventClick.setProps({
			text: 'No events!',
			events: {}
		})
	}
});

const blog = new Blog({
	children: [
		buttonEventClick, buttonLink, buttonUpdate
	]
})

const main = document.querySelector('main') as HTMLElement;
main.classList.remove('h-100', 'd-flex')
main.innerHTML = '';

main.append(blog.element);
