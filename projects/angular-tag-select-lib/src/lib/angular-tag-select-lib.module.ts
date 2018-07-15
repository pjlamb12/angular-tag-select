import { NgModule } from '@angular/core';
import { TagSelectComponent } from './tag-select/tag-select.component';
import { TagFilterPipe } from './tag-filter.pipe';

@NgModule({
	imports: [],
	declarations: [TagSelectComponent, TagFilterPipe],
	exports: [TagSelectComponent],
})
export class AngularTagSelectModule {}
