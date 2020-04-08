const arr = [1, 2, 3, 4, 5];
const arr2 = ['abc', 'def', ...arr];
console.log(arr2); // -> [ 'abc', 'def', 1, 2, 3, 4, 5 ]

const obj = {item1: 'Hello', item2: 'there'};
const obj2 = {...obj, item3: '!'};
console.log(obj2); // -> { item1: 'Hello', item2: 'there', item3: '!' }