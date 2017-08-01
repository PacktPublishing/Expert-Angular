import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent {

  constructor() { }

  title = "Data Binding";
  tax = 10;

  updateTax() {
    this.tax = 20;
  }

}
