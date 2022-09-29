import { defaultStyles, defaultTitle } from '../constants'
import { clone } from '../core/utils'

const defaultState = {
	rowState: {},
	colState: {},
	dataState: {}, // {[id]: 'text'}
	stylesState: {},
	currentText: '',
	currentStyles: defaultStyles,
	title: defaultTitle,
	openingDate: new Date().toJSON()
}

const normalize = (state) => ({
	...state,
	currentStyles: defaultStyles,
	currentText: ''
})

export const normalizeInitialState = state => {
	return state ? normalize(state) : clone(defaultState)
}
