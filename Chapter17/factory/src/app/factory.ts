import { User } from './user'

export class POTOFactory{
    
    /**
     * Builds an User from json response
     * @param  {any}  jsonUser
     * @return {User}         
     */
    static buildUser(jsonUser: any): User {

        return new User(
            jsonUser.firstName,
            jsonUser.lastName
        );
    }
}
