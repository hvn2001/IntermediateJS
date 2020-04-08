for (var i = 0; i < 5; i++) {
    (function (num) {
        const time = num * 1000;
        setTimeout(function () {
            console.log(num);
        }, time);
    })(i);
}