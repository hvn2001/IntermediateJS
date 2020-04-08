function filter(arr, testFunction) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (testFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

const arr = ['abc', 'def', 'ghijkl', 'mnopuv'];

function longerThanThree(str) {
    return str.length > 3;
}

const newArr1 = filter(arr, longerThanThree);
const newArr2 = arr.filter(longerThanThree);

console.log(newArr1); // -> ['ghijkl', 'mnopuv']
console.log(newArr2); // -> ['ghijkl', 'mnopuv']