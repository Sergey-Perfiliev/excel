import {range} from '@core/utils'

export function shouldResize(event) {
	return event.target.dataset.resize
}

export function shouldSelect(event) {
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
