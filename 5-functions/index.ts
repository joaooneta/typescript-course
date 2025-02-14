//1 - void
const withoutReturn = function(): void{
    console.log("This function does not return anything!");
}

withoutReturn();

//2 - Callback function as an argument
const greeting = function(name: string): string{
    return `Hello ${name}`;
}

const preGreeting = function(f: (name: string) => string, userName: string){
    console.log("Preparing the function...");
    const greet = f(userName);
    console.log(greet);
}

preGreeting(greeting, "João");

//3 - Generic function
const firstElement = function<T>(arr: T[]): T{
    return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["João", "Matheus"]));
console.log(firstElement([false, true, false]));

const mergeObjects = function<U,T>(Obj1: U, Obj2: T){
    return {
        ...Obj1,
        ...Obj2
    }
}

const newObject = mergeObjects({name: "João"}, {age: 25, job: "Programmer"});
console.log(newObject);

//4 - Constraints
const biggestNumber = function<T extends number | string>(a: T, b: T){
    let biggest: T;
    if(+a > +b){
        biggest = a;
    }else{
        biggest = b;
    }
    return biggest;
}

console.log(biggestNumber("5", "3"));
console.log(biggestNumber(5, 3));

//5 - Accept more than one type per generic parameter
const mergeArrays = function<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays<number | string>([1, 2, 3], ["João", "Matheus"]));

//6 - Optional parameters
const modernGreeting = function(firstName: string, greet?: string){
    if(greet){
        return `Hello ${greet} ${firstName}, how are you?`;
    }
    
    return `Hello ${firstName}, how are you?`;
}

console.log(modernGreeting("João"));
console.log(modernGreeting("Matheus", "Dr."));

//7 - Default parameters
const defaultSum = function(n: number, m = 10): number{
    return n + m;
}

console.log(defaultSum(5, 5));
console.log(defaultSum(5));

//8 - unknown
const doSomething = function(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0]);
    }else if(typeof x === "number"){
        console.log("X is a number");
    }
}

doSomething([1, 2, 3]);
doSomething(5);

//9 - never
const showErrorMessage = function(msg: string): never{
    throw new Error(msg);
}

//showErrorMessage("Random error!");

//10 - Rest operator
const sumAll = function(...n: number[]){
    return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4));

//11 - Destructuring operator as a parameter
const showProductDetails = function({name, price} : {name: string, price: number}): string{
    return `The name of the product is ${name}, and it costs BRL ${price}.`
}

const shirt = {name: "Camisa", price: 49.99};
console.log(showProductDetails(shirt));