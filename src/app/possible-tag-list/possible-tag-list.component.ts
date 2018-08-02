import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-possible-tag-list',
	templateUrl: './possible-tag-list.component.html',
	styleUrls: ['./possible-tag-list.component.css'],
})
export class PossibleTagListComponent implements OnInit {
	@Input() possibleTags: any[];
	@Input() selectedTags: any[];
	@Output() emitTagSelected: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}

	tagSelected(tag: any) {
		this.emitTagSelected.next(tag);
	}

	isTagSelected(tag) {
		return this.selectedTags.findIndex((t: any) => t.value === tag.value) > -1;
	}
}
