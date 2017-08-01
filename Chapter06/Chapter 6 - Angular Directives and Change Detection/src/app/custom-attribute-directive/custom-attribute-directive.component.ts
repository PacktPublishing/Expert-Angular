import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-attribute-directive',
  templateUrl: './custom-attribute-directive.component.html',
  styleUrls: ['./custom-attribute-directive.component.css']
})
export class CustomAttributeDirectiveComponent implements OnInit {

  imageUrl = '././assets/images/angular.jpeg';

  constructor() { }

  ngOnInit() {
  }

}
