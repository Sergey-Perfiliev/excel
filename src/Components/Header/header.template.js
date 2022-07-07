import { defaultTitle } from '../../constants'

export function createHeader(state) {
	return `
		<input type="text" class="input" value="${state || defaultTitle}"></input>
		<div>
			<div class="button">
				<span class="material-icons">exit_to_app</span>
			</div>
			<div class="button">
				<span class="material-icons">delete</span>
			</div>
		</div>
	`
}
