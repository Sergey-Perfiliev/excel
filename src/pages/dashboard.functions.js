import { storage } from '../core/utils'


function toHTML(key) {
	const info = storage(key)
	const id = key.split(':')[1]
	const openingDate = new Date(info.openingDate)

	return `
		<li class="db__record">
			<a href="#excel/${id}">${info.title}</a>
			<strong>
				${openingDate.toLocaleDateString()}
				${openingDate.toLocaleTimeString()}			
			</strong>
		</li>
	`
}

// excel:id
function getAllKeys() {
	const keys = []
	for (let i = 0; i < localStorage.length; ++i) {
		const key = localStorage.key(i)
		if (!key.includes('excel')) continue
		keys.push(key)
	}
	return keys
}

export function createRecordsTable() {
	const keys = getAllKeys()

	if (!keys.length) {
		return `<p>No tables</p>`
	}

	return `
		<div class="db__list-header">
			<span>Name</span>
			<span>Opening date</span>
		</div>
		<ul class="db__list">
			${keys.map(toHTML).join('')}
		</ul>
	`
}
