import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private model: UserModel;

  public constructor(api: APIService) {

    this.model = new UserModel(api);
  }


  public signinClick(email: string, password: string) {
    this.model.signin(email, password);
  }

  public signupClick(email: string, password: string) {
    this.model.signup(email, password);
  }

}
