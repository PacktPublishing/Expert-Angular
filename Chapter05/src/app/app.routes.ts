import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ServicesChildComponent } from "./services/services-child.component";
import { ServicesInnerChildComponent } from "./services/services-inner-child.component";

import { aboutRoutes }    from './about/about.routes';
import { servicesRoutes }    from './services/services.routes';
import { productRoutes }    from './products/products.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  ...aboutRoutes,
  ...servicesRoutes,
  ...productRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

