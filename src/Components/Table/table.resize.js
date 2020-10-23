import {$} from '@core/dom'

export function resizeHandler($root, event) {
	const $resizer = $(event.target)
	// const $parent = $resizer.parentNode // 1st v
	// const $parent = $resizer.$el.closest('.column') // 2nd v
	const $parent = $resizer.closest('[data-type="resizable"]')		
	const coords = $parent.getCoords()
	const type = $resizer.data.resize
	const sideProp = type === 'col' ? 'bottom' : 'right'
	$resizer.css({opacity: 1, [sideProp]: '-1500px'})
	let value

	document.onmousemove = (e) => {
		if (type === 'col') {
			const delta = e.pageX - coords.right
			value = coords.width + delta
			$resizer.css({right: -delta + 'px'})
			console.log(e.pageX, coords.right, delta);
		} else {
			const delta = e.pageY - coords.bottom-0
			value = coords.height + delta
			$resizer.css({bottom: -delta + 'px'})
		}
	}

	document.onmouseup = () => {
		document.onmousemove = null
		document.onmouseup = null

		if (type === 'col') {
			$parent.css({width: value + 'px'})
			$root.findAll(`[data-col="${$parent.data.col}"]`)
				.forEach(el => el.style.width = value + 'px')
		} else {
			$parent.css({height: value + 'px'})
		}

		$resizer.css({opacity: 0, bottom: 0, zIndex: 0, right: 0})
	}
}
