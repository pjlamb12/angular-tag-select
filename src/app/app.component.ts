import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public savedSelectedTags: any[];
	public myPossibleTags: any[] = [
		{ value: '1', display: 'Tag 1' },
		{ value: '2', display: 'Tag 2' },
		{ value: '3', display: 'Tag 3' },
		{ value: '4', display: 'Tag 4' },
		{ value: '5', display: 'Tag 5' },
		{ value: '6', display: 'Tag 6' },
		{ value: '7', display: 'Tag 7' },
		{ value: '8', display: 'Tag 8' },
	];
	public myTagMapping: any = {
		value: 'value',
		display: 'display',
	};

	showSelectedTags() {
		console.log(this.savedSelectedTags);
	}
}
