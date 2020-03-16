// Write one line of code using the reduce
// function that will turn this array of 0s
// into an array of 0s and 1s.
// NO USING THE CHARACTERS { OR }

function fn() {
    const arr1 = [0, 0, 0];
    // We want to return [0, 1, 0, 1, 0, 1]

    // return arr1.reduce(/* Finish this */);
    arr1.reduce((accum, next) => [...accum, next, 1], []);
}