import {Excel} from './Components/Excel/Excel'
import {Formula} from './Components/Formula/Formula';
import {Header} from './Components/Header/Header';
import {Table} from './Components/Table/Table';
import {Toolbar} from './Components/Toolbar/Toolbar';
import { Store } from './core/Store';
import { storage } from './core/utils';
import './scss/index.scss'
import { initialState } from './store/initialState';
import { rootReducer } from './store/rootReducer';

const store = new Store(rootReducer, initialState)

store.subscribe(state => {
	console.log('App state', state)
	storage('excel-state', state)
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
	store
})

excel.render()
