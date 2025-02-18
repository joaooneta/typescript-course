//1 - Decorator example
const myDecorator = function() {
    console.log("Starting the decorator!")
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("myDecorator(): executed");
      console.log(target);
      console.log(propertyKey);
      console.log(descriptor);
    };
}
  
  
class MyClass {
  
    @myDecorator()
    testing() {
      console.log("Finishing method execution");
    }
}
  
const myObj = new MyClass()
  
myObj.testing()

//2 - Multiple decorators
const a = function() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("Executed function a");
    };
}
  
  function b() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("Executed function b");
    };
}
  
class MultipleClass {
  
    @a()
    @b()
    testing() {
        console.log("Finishing method execution");
    }
}
  
const multiple = new MultipleClass();
  
multiple.testing();

//3 - Class decorator
const classDec = function(constructor: Function) {
    console.log(constructor)
    if(constructor.name === "User") {
      console.log("Creating user!");
    }
}
  
@classDec
class User {
    name
  
    constructor(name: string) {
      this.name = name;
    }
}
  
const joao = new User("João");

// 4 - Method decorator
const enumerable = function(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
}
  
  class Machine {
    name
  
    constructor(name: string) {
      this.name = name
    }
  
    @enumerable(false)
    showName() {
      return `The machine name is: ${this.name}`;
    }
}
  
const tractor = new Machine("Tractor");
  
console.log(tractor.showName());

// 5 - Acessor decorator
class Monster {
    name?
    age?
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    @enumerable(true)
    get showName() {
      return `Monster's name: ${this.name}`;
    }
  
    @enumerable(false)
    get showAge() {
      return `Monster's age: ${this.age}`;
    }
}
  
const charmander = new Monster("Charmander", 10);
  
console.log(charmander);

//6 - Property decorator
const formatNumber = function() {
    return function(target: Object, propertyKey: string) { 
      let value : string;
  
      const getter = function() {
        return value;
      };

      const setter = function(newVal: string) {
        value = newVal.padStart(5, "0");
      };
  
      Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
      }); 
    }
}
  
class ID {
    @formatNumber()
    id
  
    constructor(id: string) {
      this.id = id;
    }
}
  
const newItem = new ID("1");

console.log(newItem);
console.log(newItem.id);

//7 - Real example of a class decorator
const createdDate = function(created: Function) {
    created.prototype.createdAt = new Date();
}
  
@createdDate
class Book {
    id
  
    constructor(id: number) {
      this.id = id
    }
}
  
@createdDate
class Pen {
    id
  
    constructor(id: number) {
      this.id = id
    }
}
  
const newBook = new Book(1);
  
console.log(newBook);
  
//8 - Real example of a method decorator
const checkIfUserPosted = function() {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
      const childFunction = descriptor.value;
      descriptor.value = function(...args: any[]) {
        if (args[1] === true) {
          console.log("User has already posted!");
          return null;
        } else {
          return childFunction.apply(this, args);
        }
      }
      return descriptor;
    };
}
  
class Post {
    alreadyPosted = false
  
    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
      this.alreadyPosted = true
      console.log(`The post by user: ${content}`);
    }
}
  
const somePost = new Post();

somePost.post("My first post!", somePost.alreadyPosted);
  
somePost.post("My second post!", somePost.alreadyPosted);
  
  
//9 - Real example of a property decorator
function Max(limit: number) {
    return function(target: Object, propertyKey: string) { 
      let value : string;
      const getter = function() {
        return value;
      };
      const setter = function(newVal: string) {
        if(newVal.length > limit) {
          console.log(`The value must have at most ${limit} digits`);
          return
        }
        else {
          value = newVal;
        }      
      }; 
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
      }); 
    }
  }
  
class Admin {
    @Max(10)
    username
  
    constructor(username: string) {
      this.username = username;
    }
}
  
let pedro = new Admin("pedroadmin123");
let lee = new Admin("lee");