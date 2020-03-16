function logItem(item) {
    console.log(item);
}

function logAll(item, index, arr) {
    console.log(item, index, arr);
}

let arr = ['abc', 'def', 'ghi'];

arr.map(logItem); // -> 'abc' 'def' 'ghi'

arr.map(logAll); // -> 'abc' 0 ['abc', 'def', 'ghi']
                 // -> 'def' 1 ['abc', 'def', 'ghi']
                 // -> 'ghi' 2 ['abc', 'def', 'ghi']

///////////////////////////////////////////////
function numberItem(item, index) {
    return (index + 1) + '. ' + item;
}

const arr2 = ['bananas', 'tomatoes', 'pasta', 'avocado'];
const mappedArr = arr2.map(numberItem);

console.log(mappedArr);
// -> [ '1. bananas', '2. tomatoes', '3. pasta', '4. avocado' ]
console.log('------------write a function directly in the map call-------------');
const arr3 = [1, 2, 3, 4, 5];

const arrTimesThree = arr3.map(function (item) {
    return item * 3;
});

console.log(arrTimesThree); // -> [3, 6, 9, 12, 15]


console.log('------------arrow functions------------');
const arr4 = [1, 2, 3, 4, 5];
const arrTimesThree3 = arr4.map(item => item * 3);
console.log(arrTimesThree3); // -> [3, 6, 9, 12, 15]