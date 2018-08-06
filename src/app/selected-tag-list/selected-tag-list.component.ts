import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-selected-tag-list',
	templateUrl: './selected-tag-list.component.html',
	styleUrls: ['./selected-tag-list.component.css'],
})
export class SelectedTagListComponent implements OnInit {
	@Input() selectedTags: any[];
	@Output() emitRemoveTag: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}

	removeTag(tag: any) {
		this.emitRemoveTag.emit(tag);
	}
}
