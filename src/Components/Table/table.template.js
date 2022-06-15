
const SYMBOL_CODES = {
	A: 65,
	Z: 90
}

function toCell(row) {
	return function(_, col) {
		return `
			<div 
				class="cell" 
				contenteditable 
				data-type="cell"
				data-col="${col}"
				data-id="${row}:${col}">
			</div>
		`
	}
}

function toColumn(col, index) {
	return `
		<div class="column" data-type="resizable" data-col="${index}">
			${col}
			<div class="col-resize" data-resize="col"></div>
		</div>
	`
}

function createRow(rowNumber = '', content) {
	const resize = rowNumber ?
		'<div class="row-resize" data-resize="row"></div>' : ''
	return `
		<div class="row" data-type="resizable">
			<div class="row-info">
				${rowNumber}
				${resize}
			</div>
			<div class="row-data">${content}</div>
		</div>
	`
}

function toChar(_, index) {
	return String.fromCharCode(SYMBOL_CODES.A + index)
}

export function createTable(rowsCount = 36) {
	const colsCount = SYMBOL_CODES.Z - SYMBOL_CODES.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(toColumn)
		.join('')

	rows.push(createRow('', cols))

	for (let row = 0; row < rowsCount; row++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell(row))
			.join('')

		rows.push(createRow(row + 1, cells))
	}

	return rows.join('')
}
