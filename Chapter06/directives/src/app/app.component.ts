import { Component } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular - Packt Way';
  user = new User('Sridhar', 10);

  constructor () {}
 
}
