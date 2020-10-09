import {Excel} from './Components/Excel/Excel'
import {Formula} from './Components/Formula/Formula';
import {Header} from './Components/Header/Header';
import {Table} from './Components/Table/Table';
import {Toolbar} from './Components/Toolbar/Toolbar';
import './scss/index.scss'

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
})

excel.render()
