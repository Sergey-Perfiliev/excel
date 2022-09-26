import { Page } from '../core/Page';
import { $ } from '@core/dom'

export class DashboardPage extends Page {
	getRoot() {
		return $.create('div', 'db').html(`
			<div class="db__header">
				<h1>Tables</h1>
			</div>

			<div class="db__new">
				<div class="db__view">
					<a href="" class="db__create">
						New <br/> table
					</a>
				</div>
			</div>

			<div class="db__table db__view">
				<div class="db__list-header">
					<span>Name</span>
					<span>Opening date</span>
				</div>
				<ul class="db__list">
					<li class="db__record">
						<a href="#">Table number 1</a>
						<strong>11.09.2020</strong>
					</li>
					<li class="db__record">
						<a href="#">Table number 2</a>
						<strong>12.09.2020</strong>
					</li>
				</ul>
			</div>
		`)
	}
}
