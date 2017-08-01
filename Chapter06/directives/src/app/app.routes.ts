import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ServicesChildComponent } from "./services/services-child.component";
import { ServicesInnerChildComponent } from "./services/services-inner-child.component";
import { FirstTestComponent } from "./first-test/first-test/first-test.component";

import { TestAppComponent } from './test-app/test-app.component';

import { TestDiComponent } from './test-di/test-di.component';

import { LearningComponentComponent } from "./learning-component/learning-component.component";

import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent } from './products/products-details.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { ProvidersExampleComponent } from './providers-example/providers-example.component';

import { LearnAnimationComponent } from './learn-animation/learn-animation.component';

import { aboutRoutes }    from './about/about.routes';
import { servicesRoutes }    from './services/services.routes';
import { productRoutes }    from './products/products.routes';

//Angular Pipe Example #1
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';

import { MyComponentComponent } from './my-component/my-component.component';

import {FirstComponentComponent} from './first-component/first-component.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';

import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { CustomAttributeDirectiveComponent } from './custom-attribute-directive/custom-attribute-directive.component';
import { CustomStructureDirectiveComponent } from './custom-structure-directive/custom-structure-directive.component';
import { ChangeDetectComponent } from './change-detect/change-detect.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'first-test', component: FirstTestComponent },
  { path: 'learning-component', component: LearningComponentComponent },
  { path: 'test-app', component: TestAppComponent },
  { path: 'test-di', component: TestDiComponent },
  { path: 'providers-example', component: ProvidersExampleComponent},
  { path: 'learn-animation', component: LearnAnimationComponent},
  { path: 'demo-pipe', component: DemoPipeComponent},

  { path: 'data-binding', component: DataBindingComponent },
  { path: 'component-directive', component: FirstComponentComponent},

{ path: 'my-component', component: MyComponentComponent},
{ path: 'structure-directive', component: StructureDirectiveComponent},
{ path: 'attribute-directive', component: AttributeDirectiveComponent},
{ path: 'custom-attribute-directive', component: CustomAttributeDirectiveComponent},
{ path: 'custom-structure-directive', component: CustomStructureDirectiveComponent},
{ path: 'change-detection', component: ChangeDetectComponent},

  ...aboutRoutes,
  ...servicesRoutes,
  ...productRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

