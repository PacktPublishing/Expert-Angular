import {Component} from '@angular/core';

@Component({
    template: `
        <div class="container">
            <h4>Angular Services</h4>
            <p>This is 2nd level Inner Navigation</p>
			<a routerLink="/services" routerLinkActive="active">View All Services</a>
        </div>
        `,
    styles: ['.container {background-color: #fff;}']
})
export class ServicesInnerChildComponent {}