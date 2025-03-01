var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1 - type guard
var showSum = function (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Unable to perform the sum!");
    }
};
showSum("4", "5");
showSum(4, 5);
showSum("4", 5);
//2 - Checking if the value exists
var operations = function (arr, operation) {
    if (operation) {
        if (operation === "sum") {
            var sum = arr.reduce(function (i, total) { return i + total; });
            console.log(sum);
        }
        else if (operation === "multiply") {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log("Please, set an operation!");
    }
};
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 3, 4], "multiply");
//3 - instanceof operator
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var jhon = new User("Jhon");
var paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
var userGreeting = function (user) {
    if (user instanceof SuperUser) {
        console.log("Hello ".concat(user.name, ", would you like to see the system data?"));
    }
    else if (user instanceof User) {
        console.log("Hello ".concat(user.name));
    }
};
userGreeting(jhon);
userGreeting(paul);
//4 - in operator
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
    return Dog;
}());
var turca = new Dog("Turca");
var bob = new Dog("Bob", "German Shepherd");
var showDogDetails = function (dog) {
    if ("breed" in dog) {
        console.log("The dog is a ".concat(dog.breed));
    }
    else {
        console.log("The dog name is ".concat(dog.name));
    }
};
showDogDetails(turca);
showDogDetails(bob);
