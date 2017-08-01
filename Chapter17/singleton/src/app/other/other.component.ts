import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(private api:APIService) { 
    console.log(api);
  }

  ngOnInit() {
  }

}
