//1 - Arrays
const numbers: number[] = [1,2,3];
numbers.push(4);
console.log(numbers);

const names: string[] = ["João", "Matheus"];
names.push("Pedro");
console.log(names);

//2 - Array alternative syntax
const numbersAlt: Array<number> = [100, 200, 300];
numbersAlt.push(400);
console.log(numbersAlt);

//3 - any
const arr1: any = [1, "test", true, [], {firstName: "João"}];
arr1.push(false);
console.log(arr1);

//4 - Defining parameter types
const printSum = function(a: number, b: number){
    console.log(a+b);
}

printSum(4, 5);

//5 - Defining the function return type
const greetingStr = function(firstName: string): string {
    return `Hello, ${firstName}`;
}

console.log(greetingStr("João"));

//6 - Defining object property types
const printCoordinates = function(coord: {x: number, y:number}){
    console.log(`X: ${coord.x}`);
    console.log(`Y: ${coord.y}`);
}

printCoordinates({x: 3456.2, y: 3436.12});

//7 - Optional properties
const showNumbers = function(a: number, b:number, c?:number){
    console.log(`A: ${a}`);
    console.log(`B: ${b}`);

    if(c !== undefined) console.log(`C: ${c}`);
}

showNumbers(1, 2, 3);
showNumbers(1, 2);

//8.1 - Union type
const showBalance = function(balance: number | string){
    console.log(`The account balance is BRL ${balance}`);
}

showBalance(100);
showBalance("200");

//8.2 - Validating union types
const showUserRole = function(role: boolean | string){
    if(typeof role === "boolean") return "User not approved!";

    return `The user role is: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

//9 - Type alias
type ID = string | number;

const showId = function(id: ID){
    console.log(`The ID is: ${id}`);
}

showId(1);
showId("asdasodos");

//10 - Interface
interface Point{
    x: number
    y: number
    z: number
}

const showCoords = function(coord: Point){
    console.log(`X: ${coord.x}`);
    console.log(`Y: ${coord.y}`);
    console.log(`Z: ${coord.z}`);
}

showCoords({x: 1, y: 2, z: 3});

//11 - Literal types
const showDirection = function(direction: "left" | "right" | "center"){
    console.log(`The direction is: ${direction}`);
}

showDirection("left");

//12 - Non null assertion operator
const p = document.querySelector(".some-p");
console.log(p!.innerText);