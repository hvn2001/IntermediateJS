const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('Element: ' + array[i] + ', at index: ' + i);
    }, 3000);
}

// P21
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('Element: ' + array[i] + ', at index: ' + i);
    }, 3000);
}

/*
for (const i = 0; i < array.length; i++) {
    setTimeout(function() {
        console.log('Element: ' + array[i] + ', at index: ' + i);
    }, 3000);
}
 */
for (var i = 0; i < array.length; i++) {
    setTimeout(function (local_i) {
        return function () {
            console.log('Element: ' + array[local_i] + ', at index: ' + local_i);
        }
    }(i), 3000);
}