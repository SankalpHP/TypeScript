class Customer {
  
  // BY default the access modifiers are public
firstName: String;
lastName: String;

constructor(theFirst: string, theLast: string){

  this.firstName = theFirst;
  this.lastName = theLast;
}

}

// lets create an instance
let myCustomer  = new Customer("Martin","Dixion");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

