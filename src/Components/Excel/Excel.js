import { $ } from '@core/dom'
import { EventManager } from '@core/EventManager'
import { StoreSubscriber } from '../../core/StoreSubscriber'
import * as actions from '../../store/actions'

export class Excel {
	constructor(options) {
		this.components = options.components || []
		this.store = options.store
		this.eventManager = new EventManager()
		this.subscriber = new StoreSubscriber(this.store)
	}

	getRoot() {
		const $root = $.create('div', 'excel')
		const componentOptions = {
			eventManager: this.eventManager,
			store: this.store
		}

		this.components = this.components.map((Component) => {
			const $el = $.create('div', Component.className)
			const component = new Component($el, componentOptions)
			$el.html(component.toHTML())
			$root.append($el)
			return component
		})

		return $root
	}

	init() {
		this.store.dispatch(actions.changeOpeningDate())
		this.subscriber.subscribeComponents(this.components)
		this.components.forEach(component => component.init())
	}

	destroy() {
		this.subscriber.unsubscribeFromStore()
		this.components.forEach(component => component.destroy())
	}
}
