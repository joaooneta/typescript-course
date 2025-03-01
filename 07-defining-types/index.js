//1 - Generics
var showData = function (arg) {
    return "The data is: ".concat(arg);
};
console.log(showData([1, 2, 3]));
console.log(showData(5));
console.log(showData("Test"));
//2 - Constraints on generic types
var showProductDetails = function (obj) {
    return "The product name is: ".concat(obj.name);
};
console.log(showProductDetails({ name: "Door", color: "White" }));
console.log(showProductDetails({ name: "Car", wheels: 4, engine: 1.0 }));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" };
var myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Blue" };
console.log(myCar);
console.log(myPen);
//4 - Type parameters
var getSomeKey = function (obj, key) {
    return "The key ".concat(key, " is in the object and has the value of ").concat(obj[key]);
};
console.log(getSomeKey({ hd: "2TB", ram: "32GB" }, "ram"));
var showCharKey = function (obj, key) {
    return "".concat(obj[key]);
};
var myChar = {
    name: "João",
    age: 25,
    hasDriverLicense: true
};
console.log(showCharKey(myChar, "name"));
console.log(showCharKey(myChar, "age"));
//6 - Typeof type operator
var userName = "João";
var userName2 = "Matheus";
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Light-duty truck"
};
var showKm = function (km) {
    console.log("The vehicle has the mileage of ".concat(km, " kilometers"));
};
showKm(newTruck.km);
var someVar = 5;
var testing = "some text";
