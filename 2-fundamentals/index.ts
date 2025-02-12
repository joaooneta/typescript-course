//1 - number
const x: number = 10;
const y: number = 10.1;

console.log(x, y);
console.log(typeof x, typeof y);
console.log(y.toPrecision(3));

//2 - string
const firstName: string = "João";

console.log(firstName);
console.log(typeof firstName);
console.log(firstName.toUpperCase());

//3 - boolean
const a: boolean = true;
const b: boolean = false;

console.log(a, b);
console.log(typeof a, typeof b);

//4 - type inference e type annotation
const ann: string = "Annotation";
let inf = "Inference";

//inf = 1;