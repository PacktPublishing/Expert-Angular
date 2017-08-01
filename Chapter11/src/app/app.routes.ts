import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Angular Pipe Example #1
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';
import { ParamPipeComponent } from './param-pipe/param-pipe.component';
import { ChainPipeComponent } from './chain-pipe/chain-pipe.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'demo-pipe', component: DemoPipeComponent},
  { path: 'built-in-pipe', component: BuiltinPipesComponent},
  { path: 'param-pipe', component: ParamPipeComponent},
  { path: 'chain-pipe', component: ChainPipeComponent},
  { path: 'custom-pipe', component: ChainPipeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

