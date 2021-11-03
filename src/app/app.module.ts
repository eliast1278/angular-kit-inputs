import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CkInputTextModule} from "./inputText/ck-input-text.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CkInputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
