import { Component } from '@angular/core';
import { POTOFactory } from './factory';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){
    
    let userFromJSONAPI: User = JSON.parse('[{"lastName":"Nayrolles","firstName":"Mathieu"}]')[0];
    console.log(userFromJSONAPI);
    //will fail with TypeError: userFromUJSONAPI.hello is not a function
    //userFromJSONAPI.hello();

    let user = POTOFactory.buildUser(JSON.parse('[{"lastName":"Nayrolles","firstName":"Mathieu"}]')[0]);
    console.log(user);
    user.hello();
  }
}
