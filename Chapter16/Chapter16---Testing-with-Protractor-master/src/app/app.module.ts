import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FirstTestComponent } from './first-test/first-test.component';
import { TestAppComponent } from './test-app/test-app.component';

const routes: Routes = [
  { path: 'testing', component: FirstTestComponent },
  { path: 'test-app', component: TestAppComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    TestAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }

