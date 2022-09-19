import { compile } from 'pug';

export default <T extends {}>(template: string, props: T) => {
	const compileStr = compile(template)(props);

	return stringToElement(compileStr);
};

const stringToElement = (str: string) => {
	const parser = new DOMParser();
	const document = parser.parseFromString(str, 'text/html');

	return document.body.childNodes[0] as HTMLElement;
}
