import {Component} from "@angular/core";

@Component({
   selector: 'first-component',
    templateUrl: 'first-component.component.html'
})

export class FirstComponentComponent {
    title = 'Structural Directives';
 
  public teams = [
  { name: "USA"},
  { name: "UK"},
  { name: "China"},
  { name: "India"},
  { name: "Brazil"}
 ];
}