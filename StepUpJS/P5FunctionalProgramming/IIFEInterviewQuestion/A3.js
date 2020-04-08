for (var i = 0; i < 5; i++) { // We are explicitly using `var` for a reason
    {
        const j = i;
        const time = j * 1000;
        setTimeout(function () {
            console.log(j);
        }, time);
    }
}