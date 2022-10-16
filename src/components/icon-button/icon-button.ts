import Component from '../../core/component';

type Props = {
	onClick: string,
	icon: 'arrow-left' | 'arrow-right',
	children: never,
}

export default class IconButton extends Component<Props> {
	getIcon() {
		switch (this.props.icon) {
			case 'arrow-left':
				return '<svg role=\'img\' xmlns=\'http://www.w3.org/2000/svg\' width=\'19\' height=\'19\' stroke=\'#fff\' stroke-width=\'1\' fill=\'none\' viewBox=\'0 0 24 24\' aria-labelledby=\'arrowLeftIconTitle\'><title id=\'arrowLeftIconTitle\'>Arrow Left</title><path d=\'M9 6l-6 6 6 6\'/><path d=\'M21 12H4\'/><path stroke-linecap=\'round\' d=\'M3 12h1\'/></svg>';
			case 'arrow-right':
				return '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="19" height="19" stroke="#fff" stroke-width="1" fill="none" viewBox="0 0 24 24" aria-labelledby="arrowRightIconTitle"><title id="arrowRightIconTitle">Arrow Right</title><path d="M15 18l6-6-6-6"/><path d="M3 12h17"/><path stroke-linecap="round" d="M21 12h-1"/></svg>';
			default:
				throw new Error(`Icons with the name '${this.props.icon}' no`);
			}
	}

	render() {
		const { onClick } = this.props;

		return `
		<button onClick="${onClick}" class="button button_round">
			${this.getIcon()}
		</button>
		`;
	}
}
