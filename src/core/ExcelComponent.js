import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
	}

	// return component template
  toHTML() {
    // return <h1>this.component</h1>
	}
	
	init() {
		this.initDOMListeners()
	}

	destroy() {
		this.removeDOMListeners()
	}
}
