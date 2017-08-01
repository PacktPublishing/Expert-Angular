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
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomStructureDirectiveComponent } from './custom-structure-directive/custom-structure-directive.component';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CustomStructuralDirective } from './shared/custom-structural.directive';

//custom directive
import { HighlightDirectiveDirective } from './shared/highlight-directive.directive';
import { ChangeDetectComponent } from './change-detect/change-detect.component';

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
        ServicesInnerChildComponent,
        FirstTestComponent,
        MethodTestsComponent,
        LearningComponentComponent,
        TestAppComponent,
        DataBindingComponent,
        DependencyInjectionComponent,
        LearnDiComponent,
        ServiceComponent,
        TestDiComponent,
        ProvidersExampleComponent,
        ProvidersChildComponent,
        LearnAnimationComponent,
        DemoPipeComponent,
        FirstComponentComponent,
        StructureDirectiveComponent,
        AttributeDirectiveComponent,
        CustomStructureDirectiveComponent,
        CustomAttributeDirectiveComponent,
        MyComponentComponent,
        HighlightDirectiveDirective,
        CustomStructuralDirective,
        ChangeDetectComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        ListService,
        CityService,
        {provide: LocationStrategy, useClass: HashLocationStrategy },
        {provide : 'username', useValue: 'Sridhar@gmail.com'}
    ]
})
export class AppModule {

 }
