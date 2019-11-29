import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeToRefactorComponent } from './code-to-refactor/code-to-refactor.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeToRefactorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
