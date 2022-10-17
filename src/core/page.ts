import Component from './component';

type Meta = {
	title: string,
	description: string,
}

export default abstract class Page extends Component {
	protected _render() {
		super._render();

		this._helmet();
	}

	private _helmet() {
		const { title, description } = this.meta;

		document.title = title;
		document.querySelector('[name="description"]')?.setAttribute('content', description);
	}

	abstract get meta(): Meta;
}
