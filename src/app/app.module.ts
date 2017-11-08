import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TagSelectModule } from './tag-select/tag-select.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TagSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
