import { defaultStyles, defaultTitle } from '../constants'
import { storage } from '../core/utils'

const defaultState = {
	rowState: {},
	colState: {},
	dataState: {}, // {[id]: 'text'}
	stylesState: {},
	currentText: '',
	currentStyles: defaultStyles,
	title: defaultTitle
}

const normalize = (state) => ({
	...state,
	currentStyles: defaultStyles,
	currentText: ''
})

export const initialState =
	storage('excel-state') ?
	normalize(storage('excel-state')) :
		defaultState
