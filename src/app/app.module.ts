import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TagSelectModule } from './tag-select/tag-select.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    TagSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
