import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable()
export class APIService {

  constructor() { }

  public getUser(user: User): Promise<User> {

    return new Promise<User>(
      (resolve, reject) => {
        return user;
      }
    )
  }

  public postUser(user: User): Promise<User> {

    return new Promise<User>(
      (resolve, reject) => {
        return user;
      }
    )
  }

}
