import { Component, OnInit } from '@angular/core';

/*
@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/


@Component({
 selector: 'demo-pipe',
 template: `
 Author name is {{authorName | lowercase}}
 `
})
export class DemoPipeComponent {
 authorName = 'Sridhar Rao';
}