import { Component } from '@angular/core';
import { MyTax } from '../shared/MyTax';

@Component({
 template: `<p>tax option: {{ taxName }}</p>`,
 styleUrls: ['./calculate-tax.component.css'],
 providers: [MyTax]
})
export class CalculateTaxComponent{

 public taxName: number;

 constructor( _myTax : MyTax) {
   this.taxName = _myTax.getTaxes();
 }
 
}