let binarySearch = function (a, key) {
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (a[mid] === key) {
            return mid;
        }

        if (key < a[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++) {
    console.log("binarySearch(arr, " + (inputs[i]) + ") = " + (binarySearch(arr, inputs[i])))
}