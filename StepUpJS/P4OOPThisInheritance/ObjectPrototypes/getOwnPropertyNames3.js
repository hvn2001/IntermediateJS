const obj = {prop: 'Hi there!'};
obj.__proto__.testProp = 'Hello!';
console.log(Object.getOwnPropertyNames(obj)); // -> [ 'prop' ]