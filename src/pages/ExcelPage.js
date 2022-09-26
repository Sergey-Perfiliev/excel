import { Page } from '../core/Page';
import { debounce, storage } from '../core/utils';
import { Store } from '@core/Store'
import { rootReducer } from '../store/rootReducer'
import { initialState } from '../store/initialState'
import { Excel } from '../Components/Excel/Excel'
import { Header } from '../Components/Header/Header'
import { Toolbar } from '../Components/Toolbar/Toolbar'
import { Formula } from '../Components/Formula/Formula'
import { Table } from '../Components/Table/Table'

export class ExcelPage extends Page {
	getRoot() {
		const store = new Store(rootReducer, initialState)

		const stateListener = debounce(state => {
			storage('excel-state', state)
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
