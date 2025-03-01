//1 - Fields in classes
class User{
    firstName!: string
    age!: number
}

const joao = new User();
joao.firstName = "João";

console.log(joao);

//2 - Constructor
class NewUser{
    name
    age

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const matheus = new NewUser("Matheus", 25);

console.log(matheus);

//3 - Readonly fields
class Car{
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name;
    }
}

const fusca = new Car("fusca");
console.log(fusca);

//4 - Super and Inheritance
class Machine{
    name

    constructor(name: string){
        this.name = name;
    }
}

const tractor = new Machine("Tractor");

class KillerMachine extends Machine{
    guns

    constructor(name: string, guns: number){
        super(name);
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(tractor);
console.log(destroyer);

//5 - Methods
class Dwarf{
    name

    constructor(name: string){
        this.name = name;
    }

    greeting(){
        console.log("Hey Stranger!");
    }
}

const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();

//6 - This keyword
class Truck{
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`A truck of the ${this.model} model, which has ${this.hp} horsepower`);
    }
}

const truck = new Truck("Volvo FH16", 750);
truck.showDetails();

//7 - Getters
class Person{
    name
    surname

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
}

const joaoOneta = new Person("João", "Oneta");
console.log(joaoOneta.fullName);

//8 - Setters
class Coords{
    x!: number
    y!: number

    set fillX(x: number){
        if(x === 0) return;

        this.x = x;

        console.log("X filled with success");
    }

    set fillY(y: number){
        if(y === 0) return;

        this.y = y;

        console.log("Y filled with success");
    }

    get getCoords(){
        return `X: ${this.x}, Y: ${this.y}`;
    }
}

const myCoords = new Coords();

myCoords.fillX = 10;
myCoords.fillY = 11;
myCoords.fillY = 0;
console.log(myCoords.getCoords);

//9 - Interface inheritance
interface showTitle{
    itemTitle(): string
}

class BlogPost implements showTitle{
    title

    constructor(title: string){
        this.title = title;
    }

    itemTitle(){
        return `The blog post title is: ${this.title}`;
    }
}

const myPost = new BlogPost("Hello World");
console.log(myPost.itemTitle());

//10 - Method override
class Base{
    someMethod(){
        console.log("Something");
    }
}

class NewClass extends Base{
    someMethod(){
        console.log("Method override");
    }
}

const myObject = new NewClass();
myObject.someMethod();

//11 - Visibility: public
class C{
    public x = 10;
}

class D extends C{}

const cInstance = new C();
console.log(cInstance.x);

const dInstance = new D();
console.log(dInstance.x);

//12 - Visibility: protected
class E{
    protected x = 10;

    protected protectedMethod(){
        console.log("This is a protected method");
    }
}

class F extends E{
    showX(){
        console.log(`X: ${this.x}`);
    }

    showProtectedMethod(){
        this.protectedMethod();
    }
}

const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();

//13 - Visibility: private
class PrivateClass{
    private name = "private";

    showName(){
        return this.name;
    }

    private privateMethod(){
        console.log("Private Method");
    }

    showPrivateMethod(){
        this.privateMethod();
    }
}

const privateObj = new PrivateClass();
console.log(privateObj.showName());
privateObj.showPrivateMethod();

//14 - Static members
class StaticMembers{
    static prop = "Static"

    static staticMethod(){
        console.log("This is a static method");
    }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();


//15 - Generic class
class Item<T, U>{
    first
    second

    constructor(first: T, second: U){
        this.first = first;
        this.second = second;
    }

    get showFirst(){
        return `The first is: ${this.first}`;
    }
}

const newItem = new Item("Surprise", "Box");
console.log(newItem);
console.log(newItem.showFirst);

const secondItem = new Item(11, 12);
console.log(secondItem);
console.log(secondItem.showFirst);

//16 - Parameter properties
class ParameterProperties{
    constructor(
        public name: string, 
        private qty: number, 
        private price: number
    ){
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    get showQty(){
        return `Total quantity: ${this.qty}`;
    }

    get showPrice(){
        return `Price: BRL ${this.price}`;
    }
}

const newShirt = new ParameterProperties("Blue Shirt", 10, 25.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

//17 - Class expressions
const myClass = class<T> {
    name

    constructor(name: T){
        this.name = name;
    }
}

const person = new myClass("João");
console.log(person);

//18 - Abstract class
abstract class AbstractClass{
    abstract showName(): void;
}

class AbstractExample extends AbstractClass{
    name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    showName(){
        console.log(`The name is: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("João");
newAbstractObject.showName();

//19 - Relationship between classes
class Dog{
    name!: string;
}

class Cat{
    name!: string;
}

const dog: Dog = new Cat();