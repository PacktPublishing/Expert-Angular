/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.css']
})
export class BuiltinPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import { Component } from '@angular/core';

@Component({
 template: `
 <h5>Built-In DatePipe</h5>
 <ol>
 <li>
 <strong class="packtHeading">DatePipe example expression</strong>
 <p>Today is {{today | date}}
 </li>
 <li>
 <strong class="packtHeading">DatePipe example expression</strong>
 <p>{{ today | date:'MM-dd-yyyy' }} 
 <p>{{ today | date:'medium' }}
 <p>{{ today | date:'shortTime' }} 
 </li>
<li>
<strong class="packtHeading">DecimalPipe example</strong>
 <p>state_tax (.5-5): {{state_tax | number:'.5-5'}}</p>
 <p>state_tax (2.10-10): {{state_tax | number:'2.3-3'}}</p>
 </li>
 <li>
 <strong class="packtHeading">CurrencyPipe example</strong>
 <p>Salary in USD: {{ salary | currency:'USD':true }}</p>
 <p>Expenses in INR: {{ expenses | currency:'INR':false }}</p>
 </li>
 <li>
  <strong class="packtHeading">Lowercase & Uppercase Pipe</strong>
<p>Author is Lowercase: <b> {{authorName | lowercase }}</b></p>
<p>Author in Uppercase is {{authorName | uppercase }}</p>
 </li>
<li>
  <strong class="packtHeading">JsonPipe example</strong>
<pre>{{ authorObj | json }}</pre>
 </li>
 <li>
 <strong class="packtHeading">LowercasePipe example</strong>
 <p>Original email Id is:  {{ emailAddress }} </p>
 <p>Sliced email Id is:  {{ emailAddress | slice : 0: 5}} </p>
 </li>
 </ol>

 `,
})
export class BuiltinPipesComponent {
 today = new Date();

 state_tax: number = 5.1445;

 salary: number = 2500;
 expenses: number = 1500;

 authorName = "Sridhar Rao";

 emailAddress = "test@packtpub.com";

  authorObj: any; 
  constructor() {
  this.authorObj = {
    name: 'Sridhar Rao',
    website: 'http://packtpub.com',
    Books: 'Mastering Angular2'
    };
  }
}
