import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';

import { routing } from "./app.routes";
import { ChangeDetectTestComponent } from './change-detect-test/change-detect-test.component';
import { FirstTestComponent } from './first-test/first-test.component';
import { TestAppComponent } from './test-app/test-app.component';
@NgModule({
  imports:      [
        BrowserModule,
        routing,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        ChangeDetectTestComponent,
        FirstTestComponent,
        TestAppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {

 }
