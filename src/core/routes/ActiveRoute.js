export class ActiveRoute {
	static get path() {
		console.log(window.location.hash.slice(1))
		return window.location.hash.slice(1)
	}

	static get param() {
		console.log(ActiveRoute.path.split('/')[1])
		return ActiveRoute.path.split('/')[1]
	}
}
