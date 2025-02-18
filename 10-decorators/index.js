"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 - Decorator example
const myDecorator = function () {
    console.log("Starting the decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("myDecorator(): executed");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
};
class MyClass {
    testing() {
        console.log("Finishing method execution");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
//2 - Multiple decorators
const a = function () {
    return function (target, propertyKey, descriptor) {
        console.log("Executed function a");
    };
};
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executed function b");
    };
}
class MultipleClass {
    testing() {
        console.log("Finishing method execution");
    }
}
__decorate([
    a(),
    b()
], MultipleClass.prototype, "testing", null);
const multiple = new MultipleClass();
multiple.testing();
//3 - Class decorator
const classDec = function (constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Creating user!");
    }
};
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const joao = new User("João");
// 4 - Method decorator
const enumerable = function (value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
};
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `The machine name is: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const tractor = new Machine("Tractor");
console.log(tractor.showName());
// 5 - Acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Monster's name: ${this.name}`;
    }
    get showAge() {
        return `Monster's age: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
//6 - Property decorator
const formatNumber = function () {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
};
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);
//7 - Real example of a class decorator
const createdDate = function (created) {
    created.prototype.createdAt = new Date();
};
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(1);
console.log(newBook);
//8 - Real example of a method decorator
const checkIfUserPosted = function () {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("User has already posted!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
};
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`The post by user: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const somePost = new Post();
somePost.post("My first post!", somePost.alreadyPosted);
somePost.post("My second post!", somePost.alreadyPosted);
//9 - Real example of a property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`The value must have at most ${limit} digits`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin("pedroadmin123");
let lee = new Admin("lee");
