import { Component, ViewChild } from '@angular/core';
import { MyTax } from './my-tax';
import { Vehicle } from './vehicle';

@Component({
  templateUrl: 'providers-example.component.html',
  providers: [MyTax]
})
export class ProvidersExampleComponent{
	
	public name: number;
	
   	constructor(protected _myTax : MyTax) {
  		this.name = this._myTax.getTaxes();
 	}
}

