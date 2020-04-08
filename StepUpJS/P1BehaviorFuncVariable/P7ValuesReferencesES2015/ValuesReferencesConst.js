// Objects are mutable
var varArr = [];
let letArr = [];
const constArr = [];

varArr.push(3);
letArr.push(4);
constArr.push(5);

varArr = ['New var array'];
letArr = ['New let array'];
// constArr = ['New const array']; // -> Uncaught TypeError: Assignment to constant variable.

console.log("---------No empty initializations ---------");

var a;
let b;
// const c; // -> Uncaught SyntaxError: Missing initializer in const declaration