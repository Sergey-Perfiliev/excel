import { defaultTitle } from '../../constants'

export function createHeader(state) {
	return `
		<input type="text" class="input" value="${state || defaultTitle}"></input>
		<div>
			<div class="button" data-button="delete">
				<span class="material-icons" data-button="delete">delete</span>
			</div>
			<div class="button" data-button="exit">
				<span class="material-icons" data-button="exit">exit_to_app</span>
			</div>
		</div>
	`
}
