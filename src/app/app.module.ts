import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgxTypedJsModule} from 'ngx-typed-js';

import {AppComponent} from './app.component';
import {StickyHeaderComponent} from './sticky-header/sticky-header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
