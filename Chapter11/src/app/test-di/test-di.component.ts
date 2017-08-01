import { Component, OnInit } from '@angular/core';
import { TestDiService } from './test-di.service';

@Component({
  selector: 'app-test-di',
  templateUrl: './test-di.component.html',
  styleUrls: ['./test-di.component.css'],
  providers: [TestDiService]
})
export class TestDiComponent{

 constructor(private _testDiService: TestDiService) {}

 authors = this._testDiService.getAuthors();

}
