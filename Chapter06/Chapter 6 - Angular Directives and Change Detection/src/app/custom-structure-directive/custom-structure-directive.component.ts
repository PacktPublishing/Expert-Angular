import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-custom-structure-directive',
  templateUrl: './custom-structure-directive.component.html',
  styleUrls: ['./custom-structure-directive.component.css']
})
export class CustomStructureDirectiveComponent {

  constructor() { }

 public products = [{
    productName: 'Shoes',
    isAvailable : true
    },
    {
    productName: 'Belts',
    isAvailable : true
    },
    {
    productName: 'Watches',
    isAvailable : false
 }]
}
