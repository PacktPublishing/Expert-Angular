import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnAnimationComponent } from './learn-animation/learn-animation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'learn-animation', component: LearnAnimationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);