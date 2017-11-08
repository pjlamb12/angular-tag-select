import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagSelectComponent } from './tag-select/tag-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TagSelectComponent],
  exports: [TagSelectComponent]
})
export class TagSelectModule { }
