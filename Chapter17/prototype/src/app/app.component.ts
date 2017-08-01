import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(){

    for (var index = 0; index < 11; index++) {
      
      console.log(MoviePool.getMovie());
    }
  }
}
