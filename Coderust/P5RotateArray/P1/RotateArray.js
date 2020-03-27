let reverseArray = function (arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

let rotateArray = function (arr, n) {
    let len = arr.length;

    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
        // calculate the positive rotations needed.
        n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    // For example: 1, 2, 3, 4, 5 where n = 2.
    // -> 5, 4, 3, 2, 1
    // -> 4, 5, 3, 2, 1
    // -> 4, 5, 1, 2, 3

    reverseArray(arr, 0, len - 1);
    reverseArray(arr, 0, n - 1);
    reverseArray(arr, n, len - 1);
};

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log("Array Before Rotation");
console.log(arr)

rotateArray(arr, 2);

console.log("Array After Rotation");
console.log(arr)