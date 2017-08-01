import { Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductsDetailsComponent } from './products-details.component';

export const productRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent } 	
];