import {ExcelComponent} from '@core/ExcelComponent'
import {matrix, shouldResize, shouldSelect} from './table.functions'
import {resizeHandler} from './table.resize'
import {TableSelection} from './table.selection'
import {createTable} from './table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
	static className = 'excel__table'

	constructor($root) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown']
		})
	}

	toHTML() {
		return createTable()
	}

	prepare() {
		this.selection = new TableSelection(this.$root)
	}
	
	init() {
		super.init()

		const $cell = this.$root.find('[data-id="0:0"]')
		this.selection.select($cell)
	}

	onMousedown(event) {
		if (shouldResize(event)) {
			resizeHandler(this.$root, event)
		} else if (shouldSelect(event)) {
			const $target = $(event.target)
			if (event.shiftKey) {
				const $cells = matrix($target, this.selection.current)
					.map(id => this.$root.find(`[data-id="${id}"]`))
				this.selection.selectGroup($cells)								
			} else {
				this.selection.select($target)
			}
		}
	}
}
