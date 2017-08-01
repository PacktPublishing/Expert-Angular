export class MyTax {
 public taxValue: number;
 constructor () {
     }

 getTaxes() {
  this.taxValue=Math.round(Math.random()*100);
  return this.taxValue; 
 }
 
}