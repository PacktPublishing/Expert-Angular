import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { routing } from "./app.routes";

import { AppComponent } from './app.component';
import { LearnAnimationComponent } from './learn-animation/learn-animation.component';

@NgModule({
  imports:      [
        BrowserModule,
        routing,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        LearnAnimationComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {

 }
