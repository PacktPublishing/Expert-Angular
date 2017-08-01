import { Component } from '@angular/core';

@Component({
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent{

  firstName: string = '';
  
  constructor() { }

  sendMailUpdate() {
    this.firstName = 'Thanks '+this.firstName; 
  }
}
