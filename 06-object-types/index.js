var showProductDetails = function (product) {
    console.log("The product name is ".concat(product.name, " and it costs BRL ").concat(product.price, "."));
    if (product.isAvailable) {
        console.log("The product is available!");
    }
};
var shirt = {
    name: "Shirt",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
var showUserDetails = function (user) {
    console.log("The user email is: ".concat(user.email));
    if (user.role) {
        console.log("The user role is: ".concat(user.role));
    }
};
var u1 = { email: "joao@email.com", role: "admin" };
var u2 = { email: "matheus@email.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var joao = {
    name: "João",
    age: 25
};
var matheus = {
    name: "Matheus",
    age: 100,
    superPowers: ["Fly", "Immortality"]
};
console.log(joao);
console.log(matheus);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
//7 - Readonly Array
var myArray = ["A", "B", "C"];
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
var anotherUser = ["João", 25];
console.log(anotherUser);
//9 - Readonly tuples
var showNumbers = function (numbers) {
    console.log(numbers[0], numbers[1]);
};
showNumbers([1, 2]);
