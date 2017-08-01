import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
    template:  `
        <div class="container">
            <h4>Built with Angular2</h4>
            <p> select country specific website for more details </p>
            
            <nav>
              <a routerLink="10"  routerLinkActive="disabled">Product #10</a><br/>
              <a routerLink="11"  routerLinkActive="disabled">Product #11</a><br/>
              <a routerLink="12"  routerLinkActive="disabled">Product #12</a><br/>
            </nav>
              <br/>
                <button  (click)="navigateToServices()">GoTo Services</button><br/>

            <router-outlet></router-outlet>

        </div>`,
    styles: ['.container {background-color: #fff;}']
})
export class ProductsComponent {

	constructor(private router: Router) {}

	navigateToServices(){
		this.router.navigate(['/services']);
	}

}
