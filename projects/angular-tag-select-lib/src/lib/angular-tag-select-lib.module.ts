import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TagSelectComponent } from './tag-select/tag-select.component';
import { TagFilterPipe } from './tag-filter.pipe';
import { TagSelectTrComponent } from './tag-select-tr/tag-select-tr.component';

@NgModule({
	imports: [CommonModule, FormsModule],
	declarations: [TagSelectComponent, TagFilterPipe, TagSelectTrComponent],
	exports: [TagSelectComponent, TagSelectTrComponent],
})
export class AngularTagSelectModule {}
