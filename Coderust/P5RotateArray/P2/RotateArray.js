let rotateArray = function (arr, n) {
    let len = arr.length;

    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
        // calculate the positive rotations needed.
        n = n + len;
    }

    let temp = [];

    // copy last N elements of array into temp
    for (let i = 0; i < n; i++) {
        temp[i] = arr[len - n + i];
    }

    // shift original array
    for (let i = len - 1; i >= n; i--) {
        arr[i] = arr[i - n];
    }

    // copy temp into original array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
};

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log("Array Before Rotation");
console.log(arr)

rotateArray(arr, -3);

console.log("Array After Rotation");
console.log(arr)