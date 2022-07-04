import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.eventManager = options.eventManager
		this.store = options.store
		this.unsubscribers = []
		this.storeSub = null

		this.prepare()
	}

	// setup component before init
	prepare() {}

	// return component template
  toHTML() {
    // return <h1>this.component</h1>
	}

	// notify listeners about event
	$notify(event, ...args) {
		this.eventManager.notify(event, ...args)
	}

	// subscribe on event
	$on(event, fn) {
		const unsub = this.eventManager.subscribe(event, fn)
		this.unsubscribers.push(unsub)
	}

	$dispatch(action) {
		this.store.dispatch(action)
	}

	$subscribe(fn) {
		this.storeSub = this.store.subscribe(fn)
	}
	
	// init component
	// add DOM listeners
	init() {
		this.initDOMListeners()
	}

	// delete component
	// remove DOM listeners
	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach(unsub => unsub())
		this.storeSub.unsubscribe()
	}
}
