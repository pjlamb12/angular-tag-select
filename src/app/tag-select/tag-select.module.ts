import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagSelectComponent } from './tag-select/tag-select.component';
import { TagFilterPipe } from './tag-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TagSelectComponent, TagFilterPipe],
  exports: [TagSelectComponent]
})
export class TagSelectModule { }
