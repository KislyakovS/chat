import Component, { Events } from '../../core/component';
import router from '../../core/router';

import IconButton from '../icon-button';

export default class Back extends Component {
  private _onClickBack(e: Event) {
    e.preventDefault();

    router.back();
  }

  protected children() {
    return { IconButton };
  }

  protected events(): Events {
    return [{ name: 'click', listener: this._onClickBack }];
  }

  render() {
    return `
		<div class="back">
			<IconButton onClick="${this._onClickBack.name}" icon="arrow-left" />
		</div>
		`;
  }
}
