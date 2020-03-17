const obj = {
    val1: 'abc',
    val2: 'def',
    val3: '',
    nullProperty: null
};

for (const key in obj) { // const works here, but not in normal for-loops
    console.log(key, obj[key]);
}
// -> val1 abc
// -> val2 def

const keys = Object.keys(obj);
console.log(keys); // -> ['val1', 'val2]

console.log('--------------Chaining Array Methods------------------');
const values = Object.keys(obj).map(key => obj[key]);
console.log(values); // -> ['abc', 'def']

console.log('--------------object that are not null------------------');
const valuesNotNull = Object.keys(obj)
    .map(key => obj[key])
    .filter(value => value !== null);
console.log(valuesNotNull); // -> ['abc', 'def', '']


console.log('--------------Ex1------------------');
const obj2 = {
    val1: 4,
    val2: 5,
    val3: 6,
};
const sum = Object.keys(obj2).map(key => obj2[key]).reduce((accum, next) => accum + 3 * next, 0);
const sum2 = Object.keys(obj2)
    .map(function (key) {
        return obj2[key] * 3;
    }).reduce(function (accum, next) {
        return accum + next;
    });
console.log(sum);
console.log(sum2);