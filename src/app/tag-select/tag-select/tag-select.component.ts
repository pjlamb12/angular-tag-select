import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag } from '../tag';
import { TagFilterPipe } from '../tag-filter.pipe';

@Component({
	selector: 'tag-select',
	templateUrl: './tag-select.component.html',
	styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements OnInit {
	@Input() tagsSelectedAtStart: any[];
	@Input() tagsToSelect: any[];
	@Input() tagMapping: Tag;
	@Input() tagItemIdentiferPlural: string;
	@Input() iconClasses: { iconPrefix: string, checkedIconClass: string, uncheckedIconClass: string, dynamicallyAddIconClass: string } = {
		iconPrefix: 'fa',
		checkedIconClass: 'fa-check-square-o',
		uncheckedIconClass: 'fa-square-o',
		dynamicallyAddIconClass: 'fa-plus',
	};
	@Input() canDynamicallyAdd: boolean = false;
	@Output() selectedTagsUpdated: EventEmitter<Tag[]> = new EventEmitter<Tag[]>();
	@Output() dynamicallyAddNewTag: EventEmitter<string> = new EventEmitter<string>();
	public possibleTags: Tag[] = [];
	public selectedTags: Tag[] = [];
	public filterText: string = '';
	public filteredTagsLength: number;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges() {
		if (this.tagsToSelect && this.tagsToSelect.length > 0) {
			this.buildPossibleTagsList();
		}
		if (this.tagsToSelect && this.tagsSelectedAtStart) {
			this.selectTagsAtStart();
		}
	}

	countFilteredTags() {
		this.filteredTagsLength = new TagFilterPipe().transform(this.possibleTags, this.filterText).length;
	}

	dynamicallyAddTag() {
		this.dynamicallyAddNewTag.emit(this.filterText);
		this.filterText = '';
		this.countFilteredTags();
	}

	selectTagsAtStart() {
		console.log('starting with selected tags: ', this.tagsSelectedAtStart);
		for (const item of this.tagsSelectedAtStart) {
			console.log('item: ', item);
			const found = this.possibleTags.find((tag: Tag) => tag.value === item[this.tagMapping.value]);
			console.log('found: ', found);
			if (found) {
				this.toggleTag(found);
			}
		}
	}

	buildPossibleTagsList() {
		this.possibleTags = [];
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
