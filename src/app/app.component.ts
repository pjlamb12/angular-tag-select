import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public tagMapping = { value: 'id', display: 'description' };
	public possibleTags: any[] = [
		{
			id: 1,
			description: 'Item 1'
		},
		{
			id: 2,
			description: 'Item 2'
		},
		{
			id: 3,
			description: 'Item 3'
		},
		{
			id: 4,
			description: 'Item 4'
		},
		{
			id: 5,
			description: 'Item 5'
		},
		{
			id: 6,
			description: 'Item 6'
		},
		{
			id: 7,
			description: 'Item 7'
		},
		{
			id: 8,
			description: 'Item 8'
		},
		{
			id: 9,
			description: 'Item 9'
		},
		{
			id: 10,
			description: 'Item 10'
		},
	];

	public startingTags = [
		{ id: 1, description: 'Item 1' }
	]

	public selectedTags;

	addDynamicTag(newTagDisplay: string) {
		this.possibleTags.push({ id: this.possibleTags.length + 1, description: newTagDisplay });
		this.startingTags = [...this.selectedTags, { id: this.possibleTags.length, description: newTagDisplay }];
	}

	tagsUpdated(list: any) {
		this.selectedTags = [...list];
	}
}
