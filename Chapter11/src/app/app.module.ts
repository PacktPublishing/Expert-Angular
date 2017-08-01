import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';

import { routing } from "./app.routes";
/*
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent }    from './products/products-details.component';
import { ServicesChildComponent } from "./services/services-child.component";
import { ServicesInnerChildComponent } from "./services/services-inner-child.component";


import { FirstTestComponent } from './first-test/first-test/first-test.component';
import { MethodTestsComponent } from './method-tests/method-tests.component';
import { LearningComponentComponent } from './learning-component/learning-component.component';
import { TestAppComponent } from './test-app/test-app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

import { CityService } from './test-di/city.service';

import { ListService } from './shared/list-service';
import { LearnDiComponent } from './learn-di/learn-di.component';
import { ServiceComponent } from './service/service.component';
import { TestDiComponent } from './test-di/test-di.component';

import { ProvidersExampleComponent } from './providers-example/providers-example.component';

import { ProvidersChildComponent } from './providers-example/providers-child.component';

import { MyTax } from './providers-example/my-tax';
import { LearnAnimationComponent } from './learn-animation/learn-animation.component';
*/
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';
import { ParamPipeComponent } from './param-pipe/param-pipe.component';
import { ChainPipeComponent } from './chain-pipe/chain-pipe.component';
import { UpdateTaxPipe } from './custom-pipe.pipe';

@NgModule({
  imports:      [
        BrowserModule,
        routing,
        FormsModule,
        BrowserAnimationsModule
        
    ],
    declarations: [
        AppComponent,
        /*
        ProductsComponent,
        ServicesComponent,
        AboutComponent,
        ProductsDetailsComponent,
        ServicesChildComponent,
        ServicesInnerChildComponent,
       */
        DemoPipeComponent,
        BuiltinPipesComponent,
        ParamPipeComponent,
        ChainPipeComponent,
        UpdateTaxPipe
    ],
    bootstrap: [
        AppComponent
    ],
    providers: []
})
export class AppModule {

 }
