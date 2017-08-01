import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-tests',
  templateUrl: './method-tests.component.html',
  styleUrls: ['./method-tests.component.css']
})
export class MethodTestsComponent {
	
  title = "Calculating Taxes Component";

  total_tax:number;

  state_tax = 10;
  federal_tax = 20;

  constructor() { 
  	this.calculate();
  }

  calculate() {
  	//this.total_tax = this.items.reduce((sum, item) => sum //+ item.value, 0);

  	this.total_tax = this.state_tax + this.federal_tax;
  };

}
