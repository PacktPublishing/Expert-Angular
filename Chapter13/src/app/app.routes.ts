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
import { CalculateTaxComponent } from './calculate-tax/calculate-tax.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'example-1', component: CalculateTaxComponent },
  { path: 'learning-component', component: LearningComponentComponent },
  { path: 'test-app', component: TestAppComponent },
  { path: 'test-di', component: TestDiComponent },
  { path: 'providers-example', component: ProvidersExampleComponent},
  { path: 'learn-animation', component: LearnAnimationComponent},
  { path: 'demo-pipe', component: DemoPipeComponent},

  { path: 'data-binding', component: DataBindingComponent },
  ...aboutRoutes,
  ...servicesRoutes,
  ...productRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

