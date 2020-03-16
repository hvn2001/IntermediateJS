// Sum Array
function add(numbers) {
    return numbers.reduce((accum, next) => accum + next, 0);
}

let strings = ['abc', 'def'];

//Array To Object
function toObject(strings) {
    return strings.reduce((accum, next) => {
        accum[next] = true;
        return accum;
    }, {});
}

console.log(toObject(strings));

// Subset
// HVN
function isSubset(arr1, arr2) {
    for (let item of arr1) {
        if (!arr2.includes(item)) return false;
    }
    return true;
}

let res = isSubset(
    ['abc', 17, 'def'],
    ['def', 'abc', null, 17, 24]
);
console.log(res);

// Solution
// forEach
function isSubset2(arr1, arr2) {
    let subset = true;

    arr1.forEach(function (item) {
        if (!arr2.includes(item)) {
            subset = false;
        }
    });

    return subset;
}

// reduce
function isSubset3(arr1, arr2) {
    return arr1.reduce(function (bool, nextItem) {
        if (bool === false) {
            return false;
        }

        return arr2.includes(nextItem);
    }, true);
}