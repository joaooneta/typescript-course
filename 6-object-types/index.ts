//1 - Typing object types as function parameters using interfaces
interface Product{
    name: string
    price: number
    isAvailable: boolean
}

const showProductDetails = function(product: Product){
    console.log(`The product name is ${product.name} and it costs BRL ${product.price}.`);
    if(product.isAvailable){
        console.log("The product is available!");
    }
}

const shirt: Product = {
    name: "Shirt",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt);

//2 - Defining an interface property as optional
interface User{
    email: string
    role?: string
}

const showUserDetails = function(user: User){
    console.log(`The user email is: ${user.email}`);

    if(user.role){
        console.log(`The user role is: ${user.role}`);
    }
}

const u1: User = {email: "joao@email.com", role: "admin"};
const u2: User = {email: "matheus@email.com"};

showUserDetails(u1);
showUserDetails(u2);

//3 - Readonly properties
interface Car{
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca);

//4 - Index signature
interface CoordObject{
    [index: string]: number
}

//5 - Extending types
interface Human{
    name: string
    age: number
}

interface SuperHuman extends Human{
    superPowers: string[]
}

const joao: Human = {
    name: "João",
    age: 25
}

const matheus: SuperHuman = {
    name: "Matheus",
    age: 100,
    superPowers: ["Fly", "Immortality"]
}

console.log(joao);
console.log(matheus);

//6 - Intersection types
interface Character{
    name: string
}

interface Gun{
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold);

//7 - Readonly Array
const myArray: ReadonlyArray<string> = ["A", "B", "C"];

console.log(myArray);

//8 - Tuples
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["João", 25];

console.log(anotherUser);

//9 - Readonly tuples
const showNumbers = function(numbers: readonly [number, number]){
    console.log(numbers[0], numbers[1]);
}

showNumbers([1, 2]);