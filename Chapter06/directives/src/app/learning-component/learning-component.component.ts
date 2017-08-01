import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-component',
  templateUrl: './learning-component.component.html',
  styleUrls: ['./learning-component.component.css']
})
export class LearningComponentComponent{

	appHeading = "Welcome to Data Binding";

	public contact = {firstname : 'Sridhar',lastname:'Rao', phone: '208-646-2082', email: 'sridhar@packt.com'};
}
