//1 - Generics
const showData = function<T>(arg: T): string{
    return `The data is: ${arg}`;
}

console.log(showData([1, 2, 3]));
console.log(showData(5));
console.log(showData("Test"));

//2 - Constraints on generic types
const showProductDetails = function<T extends {name: string}>(obj: T){
    return `The product name is: ${obj.name}`;
}

console.log(showProductDetails({name: "Door", color: "White"}));
console.log(showProductDetails({name: "Car", wheels: 4, engine: 1.0}));


//3 - Using generics in interfaces
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "White"};
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Blue"};

console.log(myCar);
console.log(myPen);

//4 - Type parameters
const getSomeKey = function<T, K extends keyof T & string>(obj: T, key: K){
    return `The key ${key} is in the object and has the value of ${obj[key]}`;
}

console.log(getSomeKey({hd: "2TB", ram: "32GB"}, "ram"));

//5 - Keyof type operator
type Character = {name: string, age: number, hasDriverLicense: boolean};

type C = keyof Character;

const showCharKey = function(obj: Character, key: C): string{
    return `${obj[key]}`;
}

const myChar: Character = {
    name: "João",
    age: 25,
    hasDriverLicense: true
}

console.log(showCharKey(myChar, "name"));
console.log(showCharKey(myChar, "age"));

//6 - Typeof type operator
const userName: string = "João";
const userName2: typeof userName = "Matheus";

//7 - Indexed access type
type Truck = {km: number, kg: number, description: string};

type Km = Truck["km"];

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Light-duty truck"
}

const showKm = function(km: Km){
    console.log(`The vehicle has the mileage of ${km} kilometers`);
}

showKm(newTruck.km);

//8 - Conditional types
interface A {}
interface B extends A{}

type myType = B extends A ? number : string;

const someVar: myType = 5;


//9 - Template literal types
type TextA = "text";

type CustomType = `some ${TextA}`;

const testing: CustomType = "some text";