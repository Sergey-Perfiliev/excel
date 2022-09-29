import { Page } from '../core/Page';
import { debounce, storage } from '../core/utils';
import { createStore } from '@core/Store'
import { rootReducer } from '../store/rootReducer'
import { normalizeInitialState } from '../store/initialState'
import { Excel } from '../Components/Excel/Excel'
import { Header } from '../Components/Header/Header'
import { Toolbar } from '../Components/Toolbar/Toolbar'
import { Formula } from '../Components/Formula/Formula'
import { Table } from '../Components/Table/Table'

function storageName(param) {
	return `excel:${param}`
}

export class ExcelPage extends Page {
	getRoot() {
		const params = this.params ? this.params : Date.now().toString()

		const state = storage(storageName(params))
		const store = createStore(rootReducer, normalizeInitialState(state))

		const stateListener = debounce(state => {
			storage(storageName(params), state)
		}, 300)

		store.subscribe(stateListener)

		this.excel = new Excel({
			components: [Header, Toolbar, Formula, Table],
			store
		})

		return this.excel.getRoot()
	}

	afterRender() {
		this.excel.init()
	}

	destroy() {
		this.excel.destroy()
	}
}
