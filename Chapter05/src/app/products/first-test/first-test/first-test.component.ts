import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {
	
  @Input() firstname : string;

  constructor() { }

  ngOnInit() {
  }

  public sayHello() {
  return 'Hello '+this.firstname;
  }

}
