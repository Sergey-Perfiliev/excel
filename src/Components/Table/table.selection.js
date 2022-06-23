// import {$} from '@core/dom'

export class TableSelection {
	static className = 'selected'

	constructor($root) {
		this.group = []
		this.current = null
		this.$root = $root
	}

	clearSelection() {
		this.group.forEach($cell => $cell.removeClass(TableSelection.className))
		this.group = []
	}

	select($element) {
		this.clearSelection()
		this.group.push($element)
		$element.focus().addClass(TableSelection.className)
		this.current = $element
	}

	selectGroup($group = []) {
		this.clearSelection()
		this.group = $group
		this.group.forEach($cell => $cell.addClass(TableSelection.className))
	}
}
