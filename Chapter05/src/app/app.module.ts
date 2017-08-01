import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';

import { routing } from "./app.routes";

import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent }    from './products/products-details.component';
import { ServicesChildComponent } from "./services/services-child.component";
import { ServicesInnerChildComponent } from "./services/services-inner-child.component";

@NgModule({
  imports:      [
        BrowserModule,
        routing,
        FormsModule,
        BrowserAnimationsModule
        
    ],
    declarations: [
        AppComponent,
        ProductsComponent,
        ServicesComponent,
        AboutComponent,
        ProductsDetailsComponent,
        ServicesChildComponent,
        ServicesInnerChildComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {

 }
