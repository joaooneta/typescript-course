//1 - Arrays
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
var names = ["João", "Matheus"];
names.push("Pedro");
console.log(names);
//2 - Array alternative syntax
var numbersAlt = [100, 200, 300];
numbersAlt.push(400);
console.log(numbersAlt);
//3 - any
var arr1 = [1, "test", true, [], { firstName: "João" }];
arr1.push(false);
console.log(arr1);
//4 - Defining parameter types
var printSum = function (a, b) {
    console.log(a + b);
};
printSum(4, 5);
//5 - Defining the function return type
var greetingStr = function (firstName) {
    return "Hello, ".concat(firstName);
};
console.log(greetingStr("João"));
//6 - Defining object property types
var printCoordinates = function (coord) {
    console.log("X: ".concat(coord.x));
    console.log("Y: ".concat(coord.y));
};
printCoordinates({ x: 3456.2, y: 3436.12 });
//7 - Optional properties
var showNumbers = function (a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    if (c !== undefined)
        console.log("C: ".concat(c));
};
showNumbers(1, 2, 3);
showNumbers(1, 2);
//8.1 - Union type
var showBalance = function (balance) {
    console.log("The account balance is BRL ".concat(balance));
};
showBalance(100);
showBalance("200");
//8.2 - Validating union types
var showUserRole = function (role) {
    if (typeof role === "boolean")
        return "User not approved!";
    return "The user role is: ".concat(role);
};
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
var showId = function (id) {
    console.log("The ID is: ".concat(id));
};
showId(1);
showId("asdasodos");
var showCoords = function (coord) {
    console.log("X: ".concat(coord.x));
    console.log("Y: ".concat(coord.y));
    console.log("Z: ".concat(coord.z));
};
showCoords({ x: 1, y: 2, z: 3 });
//11 - Literal types
var showDirection = function (direction) {
    console.log("The direction is: ".concat(direction));
};
showDirection("left");
//12 - Non null assertion operator
var p = document.querySelector(".some-p");
console.log(p.innerText);
