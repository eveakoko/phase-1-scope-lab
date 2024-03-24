var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // declaring without var, let, or const makes it global
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // this will overwrite the global bestCustomer variable
}

// Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = 'John';

// Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane'; // This will cause an error because you can't reassign a constant
}
