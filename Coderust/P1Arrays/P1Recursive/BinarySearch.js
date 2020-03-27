"use strict";
let binarySearchRec = function (a, key, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
        return mid;
    } else if (key < a[mid]) {
        return binarySearchRec(a, key, low, (mid - 1));
    } else {
        return binarySearchRec(a, key, (mid + 1), high);
    }
};

let binarySearch = function (a, key) {
    return binarySearchRec(a, key, 0, (a.length - 1));
};

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++) {
    console.log("binarySearch(arr, " + (inputs[i]) + ") = " + (binarySearch(arr, inputs[i])))
}