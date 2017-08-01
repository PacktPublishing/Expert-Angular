import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookListComponent }  from './book-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BookListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
