function map(arr, transform) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = transform(arr[i]);
    }

    return newArr;
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

const arr = ['abc', 'def', 'ghi'];
const ARR = map(arr, makeUpperCase);

console.log(ARR); // -> ['ABC', 'DEF, 'GHI']

console.log('------------Using the defined map above-----------------');

function func(item) {
    return item * 3;
}

const arr2 = [1, 2, 3];
const newArr = map(arr2, func);

console.log(newArr); // -> [3, 6, 9]
console.log('------------Using the native Array.map-----------------');
const newArrMap = arr2.map(func);
console.log(newArrMap); // -> [3, 6, 9]