const obj = {};
obj.__proto__.testValue = 'Hello!';

console.log(obj.hasOwnProperty('testValue')); // -> false
console.log(obj.hasOwnProperty('__proto__')); // -> false
console.log(obj.__proto__.hasOwnProperty('testValue')); // -> true