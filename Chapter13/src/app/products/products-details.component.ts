import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div class="container">
    <h4>Product Demo Information</h4> 

    <p>This is a page navigation for child pages</p>
   showing product with Id: {{selectedId}}
   <p>
   <a routerLink="/products">All products</a>
   </p>

   </div>
    `,
    
    styles: ['.container {background-color: #fff;}']
})

export class ProductsDetailsComponent implements OnInit {
    
    private selectedId: number;
    private sub;
    
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     
  }

}