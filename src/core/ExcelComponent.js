import {DOMListener} from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.eventManager = options.eventManager
		this.subscribe = options.subscribe || []
		this.store = options.store
		this.unsubscribers = []
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

	storeChanged() {}

	isWatching(key) {
		return this.subscribe.includes(key)
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
	}
}
