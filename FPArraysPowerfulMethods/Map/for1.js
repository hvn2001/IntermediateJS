const originalArr = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < originalArr.length; i++) {
    newArr[i] = originalArr[i] * 3;
}
console.log(newArr); // -> [3, 6, 9, 12, 15]
///////////////////////////////////////
function multiplyByThree(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 3;
    }
    return newArr;
}

const arrTransformed = multiplyByThree(originalArr);
console.log(arrTransformed); // -> [3, 6, 9, 12, 15]
//////////////////////////////////////
function timesThree(item) {
    return item * 3;
}

function multiplyByThree2(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = timesThree(arr[i]);
    }
    return newArr;
}

const arrTransformed2 = multiplyByThree2(originalArr);
console.log(arrTransformed2); // -> [3, 6, 9, 12, 15]