export class User {
    constructor(private lastName: string, private firstName: string) {
    }
    hello() {
        console.log("Hi I am", this.firstName, this.lastName);
    }
}