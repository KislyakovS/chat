import Button from '../components/button';

const buttonEventClick = new Button({
	children: 'Click me!',
	events: {
		click: () => console.log('Click button!')
	}
});
const buttonLink = new Button({
	children: 'Link!',
	href: '/',
});
const buttonUpdate = new Button({
	children: 'Update first button',
	events: {
		click: () => buttonEventClick.setProps({
			children: 'No events!',
			events: {}
		})
	}
});

const main = document.querySelector('main') as HTMLElement;
main.classList.remove('h-100', 'd-flex')
main.innerHTML = '';

main.append(buttonEventClick.element, buttonLink.element, buttonUpdate.element);
