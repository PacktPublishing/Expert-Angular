import { Component } from '@angular/core';

@Component({
 template: `
 <h5>Parametrizing pipes</h5>
 
 <p>Date with parameters {{ today | date:'MM-dd-yyyy' }} 
 <p>Salary in USD: {{salary | currency:'USD':true}}</p>
 `,
})
export class ParamPipeComponent {
 today = new Date();
 salary: number = 1200;
}