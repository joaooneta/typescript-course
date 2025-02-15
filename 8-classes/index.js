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
//1 - Fields in classes
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var joao = new User();
joao.firstName = "João";
console.log(joao);
//2 - Constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var matheus = new NewUser("Matheus", 25);
console.log(matheus);
//3 - Readonly fields
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("fusca");
console.log(fusca);
//4 - Super and Inheritance
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var tractor = new Machine("Tractor");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine("Destroyer", 4);
console.log(tractor);
console.log(destroyer);
//5 - Methods
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey Stranger!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
//6 - This keyword
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("A truck of the ".concat(this.model, " model, which has ").concat(this.hp, " horsepower"));
    };
    return Truck;
}());
var truck = new Truck("Volvo FH16", 750);
truck.showDetails();
//7 - Getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this.name, " ").concat(this.surname);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var joaoOneta = new Person("João", "Oneta");
console.log(joaoOneta.fullName);
//8 - Setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0)
                return;
            this.x = x;
            console.log("X filled with success");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0)
                return;
            this.y = y;
            console.log("Y filled with success");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.x, ", Y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillX = 10;
myCoords.fillY = 11;
myCoords.fillY = 0;
console.log(myCoords.getCoords);
var BlogPost = /** @class */ (function () {
    function BlogPost(title) {
        this.title = title;
    }
    BlogPost.prototype.itemTitle = function () {
        return "The blog post title is: ".concat(this.title);
    };
    return BlogPost;
}());
var myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());
//10 - Method override
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("Something");
    };
    return Base;
}());
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.someMethod = function () {
        console.log("Method override");
    };
    return NewClass;
}(Base));
var myObject = new NewClass();
myObject.someMethod();
//11 - Visibility: public
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
console.log(cInstance.x);
var dInstance = new D();
console.log(dInstance.x);
//12 - Visibility: protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    E.prototype.protectedMethod = function () {
        console.log("This is a protected method");
    };
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X: ".concat(this.x));
    };
    F.prototype.showProtectedMethod = function () {
        this.protectedMethod();
    };
    return F;
}(E));
var fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//13 - Visibility: private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Private Method");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var privateObj = new PrivateClass();
console.log(privateObj.showName());
privateObj.showPrivateMethod();
//14 - Static members
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("This is a static method");
    };
    StaticMembers.prop = "Static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//15 - Generic class
var Item = /** @class */ (function () {
    function Item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(Item.prototype, "showFirst", {
        get: function () {
            return "The first is: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var newItem = new Item("Surprise", "Box");
console.log(newItem);
console.log(newItem.showFirst);
var secondItem = new Item(11, 12);
console.log(secondItem);
console.log(secondItem.showFirst);
//16 - Parameter properties
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return "Total quantity: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return "Price: BRL ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShirt = new ParameterProperties("Blue Shirt", 10, 25.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//17 - Class expressions
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var person = new myClass("João");
console.log(person);
//18 - Abstract class
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("The name is: ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
var newAbstractObject = new AbstractExample("João");
newAbstractObject.showName();
//19 - Relationship between classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var dog = new Cat();
