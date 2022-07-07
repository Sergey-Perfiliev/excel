import { defaultStyles } from '../../constants'
import { parse } from '../../core/parse'
import { toInlineStyles } from '../../core/utils'

const SYMBOL_CODES = {
	A: 65,
	Z: 90
}

const DEFAULT_WIDTH = 120
const DEFAULT_HEIGHT = 24

function getWidth(state, index) {
	return (state[index] || DEFAULT_WIDTH) + 'px'
}

function getHeight(state, index) {
	return (state[index] || DEFAULT_HEIGHT) + 'px'
}

function toCell(state, row) {
	return function(_, col) {
		const cellId = `${row}:${col}`
		const data = state.dataState[cellId] || ''
		const width = getWidth(state.colState, col)
		const styles = toInlineStyles({
			...defaultStyles,
			...state.stylesState[cellId]	
		})
		return `
			<div 
				class="cell" 
				contenteditable 
				data-type="cell"
				data-col="${col}"
				data-id="${cellId}"
				data-value="${data}"
				style="${styles};width: ${width}">
				${parse(data)}
			</div>
		`
	}
}

function toColumn({ col, index, width }) {
	return `
		<div 
			class="column" 
			data-type="resizable" 
			data-col="${index}" 
			style="width: ${width}"
		>
			${col}
			<div class="col-resize" data-resize="col"></div>
		</div>
	`
}

function createRow(rowNumber, content, state) {
	const resize = rowNumber ? 
		'<div class="row-resize" data-resize="row"></div>' : 
		''
	const height = rowNumber && getHeight(state, rowNumber)
	return `
		<div 
			class="row" 
			data-type="resizable" 
			data-row="${rowNumber}"
			style="height: ${height}"
		>
			<div class="row-info">
				${rowNumber || ''}
				${resize}
			</div>
			<div class="row-data">${content}</div>
		</div>
	`
}

function toChar(_, index) {
	return String.fromCharCode(SYMBOL_CODES.A + index)
}

function withWidthFrom(state) {
	return function(col, index) {
		return {
			col,
			index,
			width: getWidth(state.colState, index)
		}
	}
}

export function createTable(rowsCount = 36, state = {}) {
	const colsCount = SYMBOL_CODES.Z - SYMBOL_CODES.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		.map(withWidthFrom(state))
		.map(toColumn)
		.join('')

	rows.push(createRow(null, cols))

	for (let row = 0; row < rowsCount; row++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell(state, row))
			.join('')

		rows.push(createRow(row + 1, cells, state.rowState))
	}

	return rows.join('')
}
