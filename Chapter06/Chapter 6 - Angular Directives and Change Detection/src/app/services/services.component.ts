import { Component } from '@angular/core';

@Component({
    template:  `
        <div class="container">
            <h4>Services offered</h4>
            <ul>
            	<li><a routerLink="web-technologies" routerLinkActive="active">Web Technologies Services</a>
                </li>
                <li><a routerLink="web-technologies">Mobile Apps</a>
                </li>
                <li><a routerLink="web-technologies">CRM Apps</a>
                </li>
                <li><a routerLink="web-technologies">Enterprise Apps</a>
                </li>
            </ul>
        </div>
        
        <router-outlet></router-outlet>
        `,
    styles: ['.container {background-color:#fff;}']
})
export class ServicesComponent {
}
