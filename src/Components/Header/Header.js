import { ExcelStateComponent } from '../../core/ExcelStateComponent'
import { createHeader } from './header.template'
import { $ } from '../../core/dom'
import * as actions from '../../store/actions'
import { debounce } from '../../core/utils'

export class Header extends ExcelStateComponent {
  static className = 'excel__header'

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input'],
			subscribe: ['tableName'],
			...options,
		})
	}

	prepare() {
		this.onInput = debounce(this.onInput, 300)
	}

  toHTML() {
		return createHeader(this.store.getState().title)
  }

	onInput(event) {
		const $target = $(event.target)
		this.$dispatch(actions.changeTitle($target.text()))
	}
}
