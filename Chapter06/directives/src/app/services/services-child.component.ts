import {Component} from '@angular/core';

@Component({
    template: `
        <div class="container">
            <h4>Web Technologies</h4>
            <p>This is 1st level Inner Navigation</p>
			<a routerLink="angular2" routerLinkActive="active">Angular2 Services</a>
        </div>

        <router-outlet></router-outlet>
        
        `,
    styles: ['.container {background-color: #fff;}']
})
export class ServicesChildComponent {}