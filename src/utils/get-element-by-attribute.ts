export default (element: Element, name: string, value: string) => {
	if (element.getAttribute(name) === value) {
		return element;
	}

	return element.querySelector(`[${name}='${value}']`);
};
