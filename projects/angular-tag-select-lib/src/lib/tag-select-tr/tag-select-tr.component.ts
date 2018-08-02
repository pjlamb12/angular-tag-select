import { Component, OnInit, ContentChild, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Tag } from '../tag';

@Component({
	selector: 'ats-tag-select-tr',
	templateUrl: './tag-select-tr.component.html',
	styleUrls: ['./tag-select-tr.component.scss'],
})
export class TagSelectTrComponent implements OnInit {
	@ContentChild(TemplateRef)
	@Input()
	layoutTemplate: TemplateRef<any>;
	@Input() tagsSelectedAtStart: any[];
	@Input() tagsToSelect: any[];
	@Input() tagMapping: Tag;
	@Output() selectedTagsUpdated: EventEmitter<Tag[]> = new EventEmitter<Tag[]>();
	public possibleTags: Tag[] = [];
	public selectedTags: Tag[] = [];

	constructor() {}

	ngOnInit() {}

	updateContext(key: string, value: any) {
		this.ctx[key] = value;
	}

	ngOnChanges() {
		if (this.tagsToSelect && this.tagsToSelect.length > 0) {
			this.buildPossibleTagsList();
		}
		if (this.tagsToSelect && this.tagsSelectedAtStart) {
			this.selectTagsAtStart();
		}
	}

	selectTagsAtStart() {
		for (const item of this.tagsSelectedAtStart) {
			const found = this.possibleTags.find((tag: Tag) => tag.value === item[this.tagMapping.value]);
			if (found) {
				this.toggleTag(found);
			}
		}
		this.updateContext('tagsSelectedAtStart', this.tagsSelectedAtStart);
	}

	buildPossibleTagsList() {
		this.possibleTags = [];
		for (const item of this.tagsToSelect) {
			this.possibleTags.push({ value: item[this.tagMapping.value], display: item[this.tagMapping.display] });
		}
		this.updateContext('possibleTags', this.possibleTags);
	}

	toggleTag = (tag: Tag) => {
		const selectedIndex: number = this.selectedTags.findIndex((selected: Tag) => selected.value === tag.value);
		if (selectedIndex === -1) {
			this.selectedTags.push(tag);
		} else {
			this.selectedTags.splice(selectedIndex, 1);
		}
		this.selectedTagsUpdated.emit(this.selectedTags);
	};

	public ctx: any = {
		tagsSelectedAtStart: this.tagsSelectedAtStart,
		possibleTags: this.possibleTags,
		selectedTags: this.selectedTags,
		fns: {
			toggleTag: this.toggleTag,
		},
	};
}
