"use strict";
const Account = function(userData) {
  this.login = userData.login;
  this.email = userData.email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

class Account {
constructor({login = login, email = email}){
  this.login = login;
  this.email = email
}
getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
}
}

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
