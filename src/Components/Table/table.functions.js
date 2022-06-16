import {range} from '@core/utils'

export function shouldResize(event) {
	return event.target.dataset.resize
}

export function isCell(event) {
	return event.target.dataset.type === 'cell'
}

export function matrix($target, $current) {
	const target = $target.id(true)
	const current = $current.id(true)

	const cols = range(current.col, target.col)
	const rows = range(current.row, target.row)

	// array of ids (row:column)
	return rows.reduce((acc, row) => {
		cols.forEach(col => acc.push(`${row}:${col}`))
		return acc
	}, [])
}

export function nextSelector(key, { row, col }) {
	const MIN_VALUE = 0
	switch (key) {
		case 'Enter':
		case 'ArrowDown':
			row++
			break;

		case 'Tab':
		case 'ArrowRight':
			col++
			break;

		case 'ArrowLeft':
			col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
			break;

		case 'ArrowUp':
			row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
			break;

		default:
			break;
	}

	return `[data-id="${row}:${col}"]`
}
