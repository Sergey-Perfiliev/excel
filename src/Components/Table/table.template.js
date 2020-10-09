
const SYMBOL_CODES = {
	A: 65,
	Z: 90
}

function toCell() {
	return `
		<div class="cell" contenteditable></div>
	`
}

function toColumn(col) {
	return `
		<div class="column">${col}</div>
	`
}

function createRow(rowNumber = '', content) {
	return `
		<div class="row">
			<div class="row-info">${rowNumber}</div>
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

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell)
			.join('')

		rows.push(createRow(i+1, cells))
	}

	return rows.join('')
}
