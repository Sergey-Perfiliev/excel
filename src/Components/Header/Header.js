import { ExcelStateComponent } from '../../core/ExcelStateComponent'
import { createHeader } from './header.template'
import { $ } from '../../core/dom'
import * as actions from '../../store/actions'
import { debounce } from '../../core/utils'
import { ActiveRoute } from '../../core/routes/ActiveRoute'

export class Header extends ExcelStateComponent {
	static className = 'excel__header'

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input', 'click'],
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

	onClick(event) {
		const $target = $(event.target)

		if ($target.data.button === 'exit') {
			ActiveRoute.navigate('#dashboard')
		} else if ($target.data.button === 'delete') {
			const decision = confirm('Are you sure you want to delete this table?')
			if (decision) {
				localStorage.removeItem(`excel:${ActiveRoute.param}`)
				ActiveRoute.navigate('#dashboard')
			}
		}
	}
}
