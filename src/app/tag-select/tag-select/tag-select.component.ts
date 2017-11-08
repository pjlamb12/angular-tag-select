import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag } from '../tag';

@Component({
	selector: 'tag-select',
	templateUrl: './tag-select.component.html',
	styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements OnInit {
	@Input() tagsToSelect: any[];
	@Input() tagMapping: Tag;
	@Input() tagItemIdentiferPlural: string;
	@Input() iconClasses: { iconPrefix: string, checkedIconClass: string, uncheckedIconClass: string } = {
		iconPrefix: 'fa',
		checkedIconClass: 'fa-check-square-o',
		uncheckedIconClass: 'fa-square-o'
	};
	@Output() selectedTagsUpdated: EventEmitter<Tag[]> = new EventEmitter<Tag[]>();
	public possibleTags: Tag[] = [];
	public selectedTags: Tag[] = [];

	constructor() { }

	ngOnInit() {
		if (this.tagsToSelect && this.tagsToSelect.length > 0) {
			this.buildPossibleTagsList();
		}
	}

	buildPossibleTagsList() {
		for (const item of this.tagsToSelect) {
			this.possibleTags.push({ value: item[this.tagMapping.value], display: item[this.tagMapping.display] });
		}
	}

	toggleTag(tag: Tag) {
		const selectedIndex: number = this.selectedTags.findIndex((selected: Tag) => selected.value === tag.value);
		if (selectedIndex === -1) {
			this.selectedTags.push(tag);
		} else {
			this.selectedTags.splice(selectedIndex, 1);
		}
		this.selectedTagsUpdated.emit(this.selectedTags);
	}

	isTagSelected(tag: Tag) {
		return this.selectedTags.findIndex((selected: Tag) => selected.value === tag.value) > -1;
	}

	setIconNgClassName(tag: Tag) {
		const isSelected: boolean = this.isTagSelected(tag);
		return isSelected ? this.iconClasses.checkedIconClass : this.iconClasses.uncheckedIconClass;
	}
}
