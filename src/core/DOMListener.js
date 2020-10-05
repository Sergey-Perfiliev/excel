import {capitalize} from './utils'

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DOMListener`)
    }

		this.$root = $root
		this.listeners = listeners
	}
	
	initDOMListeners() {
		// console.log(this);
		this.listeners.forEach(listener => {
			// console.log(listener);

			const method = getMethodName(listener) 
			console.log(this, method);
			console.log(this[method]);
			if (!this[method]) {
				const name = this.name || ''
				throw new Error(
					`Method ${method} is not implemented in ${name} Component`
					)
			}
			// console.log(method);
			// same as addEventListener
			// console.log(this[method]);
			this[method] = this[method].bind(this)
			this.$root.on(listener, this[method])
		})
	}

	removeDOMListeners() {
		this.listeners.forEach(listener => {
			const method = getMethodName(listener)
			this.$root.off(listener, this[method])
		})
	}
}

function getMethodName(eventName) {
	return 'on' + capitalize(eventName)
}
