import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstTestComponent } from './first-test/first-test.component';
import { TestAppComponent } from './test-app/test-app.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'test-app', component: TestAppComponent },
  { path: 'first-test', component: FirstTestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

