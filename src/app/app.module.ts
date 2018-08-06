import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularTagSelectModule } from 'angular-tag-select-lib';
import { PossibleTagListComponent } from './possible-tag-list/possible-tag-list.component';
import { SelectedTagListComponent } from './selected-tag-list/selected-tag-list.component';

@NgModule({
	declarations: [AppComponent, PossibleTagListComponent, SelectedTagListComponent],
	imports: [BrowserModule, AngularTagSelectModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
