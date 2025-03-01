//1 - type guard
const showSum = function(a: number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b));
    }else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b);
    }else{
        console.log("Unable to perform the sum!");
    }
}

showSum("4", "5");
showSum(4, 5);
showSum("4", 5);

//2 - Checking if the value exists
const operations = function(arr: number[], operation?: string | undefined){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }else{
        console.log("Please, set an operation!");
    }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 3, 4], "multiply");

//3 - instanceof operator
class User{
    name;

    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User{
    constructor(name: string){
        super(name);
    }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

const userGreeting = function(user: object){
    if(user instanceof SuperUser){
        console.log(`Hello ${user.name}, would you like to see the system data?`);
    }else if(user instanceof User){
        console.log(`Hello ${user.name}`);
    }
}

userGreeting(jhon);
userGreeting(paul);

//4 - in operator
class Dog{
    name;
    breed;

    constructor(name: string, breed?: string){
        this.name = name;
        if(breed) this.breed = breed;
    }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "German Shepherd");

const showDogDetails = function(dog: Dog){
    if("breed" in dog){
        console.log(`The dog is a ${dog.breed}`);
    }else{
        console.log(`The dog name is ${dog.name}`);
    }
}

showDogDetails(turca);
showDogDetails(bob);