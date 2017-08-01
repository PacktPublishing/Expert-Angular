import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';

import { routing } from "./app.routes";

import { LearningComponentComponent } from './learning-component/learning-component.component';

import { DataBindingComponent } from './data-binding/data-binding.component';

import { ListProductsComponent } from './data-binding/list-products/list-products.component';
import { MyTemplateComponent } from './my-template/my-template.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

@NgModule({
  imports:      [
        BrowserModule,
        routing,
        FormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        ListProductsComponent,       
        LearningComponentComponent,
        DataBindingComponent,
        MyTemplateComponent,
        OneWayComponent,
        TwoWayComponent,
        TemplateSyntaxComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {

 }
