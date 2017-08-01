import { Component } from '@angular/core';
import { MyTax } from './my-tax';

@Component({
  selector: 'child-providers-example',
  template: `
  	<p>Federal Tax: {{innerTax}} </p>
  `
})
export class ProvidersChildComponent{
	
	public innerTax: number;

	constructor(private _myTax:MyTax){
      
       this.innerTax = _myTax.getTaxes();
    }
}

