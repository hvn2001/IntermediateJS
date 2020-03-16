const firstName = 'John';
const lastName = 'Smith';

var oldWay = 'Hi! My name is ' + firstName + ' ' + lastName + '!';
const newWay = `Hi! My name is ${firstName} ${lastName}!`;

console.log(oldWay); // -> Hi! My name is John Smith!
console.log(newWay); // -> Hi! My name is John Smith!