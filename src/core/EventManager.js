export class EventManager {
	constructor() {
		this.listeners = {}
	}

	subscribe(eventType, callback) {
		this.listeners[eventType] = this.listeners[eventType] || []
		this.listeners[eventType].push(callback)
		// unsubscribe
		return () => {
			this.listeners[eventType] = 
				this.listeners[eventType].filter(listener => listener !== callback)
		}
	}

	notify(eventType, ...args) {
		if (!Array.isArray(this.listeners[eventType])) {
			return false
		}

		this.listeners[eventType].forEach(listener => {
			listener(...args)
		})
		return true
	}
}

// const eventManager = new EventManager()

// const unsubscribe = 
// 	eventManager.subscribe('excelEvent', 
// 		data => console.log('subscribe:', data))

// eventManager.notify('excelEvent', 42)

// setTimeout(() => {
// 	eventManager.notify('excelEvent', 2)
// }, 2000)

// setTimeout(() => {
// 	unsubscribe()
// }, 3000)

// setTimeout(() => {
// 	eventManager.notify('excelEvent', 4)
// }, 4000)
