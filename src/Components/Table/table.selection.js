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

		// this.clearSelection()
		
		// const startId = $element.id(true)
		// const rowStart = startId.row
		// const colStart = startId.col

		// document.onmouseup = (e) => {
		// 	const $endElement = $(e.target)
		// 	document.onmousemove = null
		// 	document.onmouseup = null
			
		// 	const endId = $endElement.id(true)
		// 	const rowEnd = endId.row
		// 	const colEnd = endId.col

		// 	const rowSelectedStart = Math.min(rowStart, rowEnd)
		// 	const rowSelectedEnd = Math.max(rowStart, rowEnd)
		// 	const colSelectedStart = Math.min(colStart, colEnd)
		// 	const colSelectedEnd = Math.max(colStart, colEnd)

		// 	for (let row = rowSelectedStart; row <= rowSelectedEnd; row++) {
		// 		for (let col = colSelectedStart; col <= colSelectedEnd; col++) {
		// 			const id = `${+row}:${+col}`
		// 			const selector =`[data-id="${id}"]`
		// 			const $selectedCell = this.$root.find(selector)
		// 			this.group.push($selectedCell)
		// 			$selectedCell.addClass('selected')
		// 		}			
		// 	}

		// }

	}
}
