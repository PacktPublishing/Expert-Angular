import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent {

  title = 'One way data bindings';

  state = 'california';
  colorVal = 'red';
  specialClass : true;
  imageUrl = '././././assets/images/angular.jpeg';
 	tax = 20;
 
  constructor() { }
}
