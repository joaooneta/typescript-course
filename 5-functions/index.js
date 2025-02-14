var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1 - void
var withoutReturn = function () {
    console.log("This function does not return anything!");
};
withoutReturn();
//2 - Callback function as an argument
var greeting = function (name) {
    return "Hello ".concat(name);
};
var preGreeting = function (f, userName) {
    console.log("Preparing the function...");
    var greet = f(userName);
    console.log(greet);
};
preGreeting(greeting, "João");
//3 - Generic function
var firstElement = function (arr) {
    return arr[0];
};
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["João", "Matheus"]));
console.log(firstElement([false, true, false]));
var mergeObjects = function (Obj1, Obj2) {
    return __assign(__assign({}, Obj1), Obj2);
};
var newObject = mergeObjects({ name: "João" }, { age: 25, job: "Programmer" });
console.log(newObject);
//4 - Constraints
var biggestNumber = function (a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
};
console.log(biggestNumber("5", "3"));
console.log(biggestNumber(5, 3));
//5 - Accept more than one type per generic parameter
var mergeArrays = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["João", "Matheus"]));
//6 - Optional parameters
var modernGreeting = function (firstName, greet) {
    if (greet) {
        return "Hello ".concat(greet, " ").concat(firstName, ", how are you?");
    }
    return "Hello ".concat(firstName, ", how are you?");
};
console.log(modernGreeting("João"));
console.log(modernGreeting("Matheus", "Dr."));
//7 - Default parameters
var defaultSum = function (n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
};
console.log(defaultSum(5, 5));
console.log(defaultSum(5));
//8 - unknown
var doSomething = function (x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X is a number");
    }
};
doSomething([1, 2, 3]);
doSomething(5);
//9 - never
var showErrorMessage = function (msg) {
    throw new Error(msg);
};
//showErrorMessage("Random error!");
//10 - Rest operator
var sumAll = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
};
console.log(sumAll(1, 2, 3, 4));
//11 - Destructuring operator as a parameter
var showProductDetails = function (_a) {
    var name = _a.name, price = _a.price;
    return "The name of the product is ".concat(name, ", and it costs BRL ").concat(price, ".");
};
var shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
