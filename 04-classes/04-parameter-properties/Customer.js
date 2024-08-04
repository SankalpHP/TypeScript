"use strict";
class Customer {
    // parameter properties to reduce define a properties and then creating a constructor 
    // boilder plate code
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// lets create an instance
let myCustomer = new Customer("Martin", "Dixion");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
