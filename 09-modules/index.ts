//1 - Importing files
import importGreet  from "./greet";

importGreet();

//2 - Import variables
import { x } from "./variable";

console.log(x);

//3 - Multiple imports
import {a, b, myFunction} from "./multiple";

console.log(a, b);
myFunction();

//4 - Alias
import { someName as name } from "./changename";

console.log(name);

//5 - Import all
import * as myNumbers from "./numbers";

console.log(myNumbers);
myNumbers.showNumber();

//6 - Importing types
import { Human } from "./mytype";

class User implements Human{
    name
    age
    
    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

const joao = new User("João", 25);
console.log(joao);