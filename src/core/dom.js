class DOM {
	constructor(selector) {
		// this.$listeners = {}
		this.$el = typeof selector === 'string' ? 
			document.querySelector(selector) : 
			selector
	}
	
	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		}

		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		// this.$listeners[eventType] = callback
    this.$el.addEventListener(eventType, callback)
	}
	
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	// Element
	append(node) {
		if (node instanceof DOM) {
			node = node.$el
		}

		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}

		return this
	}

	get data() {
		return this.$el.dataset
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}

	css(styles = {}) {
		Object
			.keys(styles)
			.forEach(key => {
				this.$el.style[key] = styles[key]
			})
	}
}

$('div').html('<h1>Test</h1>').clear()

// event.target
export function $(selector) {
	return new DOM(selector)
}

$.create = (tagName, classes = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		el.classList.add(classes)
	}
	return $(el)
}
