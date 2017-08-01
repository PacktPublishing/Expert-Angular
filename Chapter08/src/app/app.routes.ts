import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningComponentComponent } from "./learning-component/learning-component.component";
import { DataBindingComponent } from './data-binding/data-binding.component';

//My template
import { MyTemplateComponent } from './my-template/my-template.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  
  { path: 'my-template', component: MyTemplateComponent },
  { path: 'template-syntax', component: TemplateSyntaxComponent},
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'one-way-binding', component: OneWayComponent },
  { path: 'two-way-binding', component: TwoWayComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

