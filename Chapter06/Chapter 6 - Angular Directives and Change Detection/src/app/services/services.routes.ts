import { Routes } from '@angular/router';

import { ServicesComponent }    from './services.component';
import { ServicesChildComponent } from "./services-child.component";
import { ServicesInnerChildComponent } from "./services-inner-child.component";

export const servicesRoutes: Routes = [
    {
        path: 'services',
        component: ServicesComponent,
        children: [
            {path: '', redirectTo: 'services', pathMatch: 'full'},
            {
            	path: 'web-technologies',
            	component: ServicesChildComponent,
              	children: [
            		{path: '', redirectTo: 'web-technologies', pathMatch: 'full'},
            		{path: 'angular2', component: ServicesInnerChildComponent}
        		]
            }
        ]
    }
];