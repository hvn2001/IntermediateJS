for (var i = 0; i < 5; i++) { // We are explicitly using `var` for a reason
    const time = i * 1000;
    setTimeout(function () {
        console.log(i);
    }, time);
} // -> ?