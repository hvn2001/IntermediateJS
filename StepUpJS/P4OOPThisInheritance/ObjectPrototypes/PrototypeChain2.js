const obj = {};
obj.__proto__.testValue = 'Hello!';

console.log(obj); // -> {}
console.log(obj.testValue); // -> Hello!