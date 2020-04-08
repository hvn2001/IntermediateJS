const obj = {
    counter: 0,
    incrementCounter: function () {
        this.counter++;
        this.logCounter();
    },
    logCounter: function () {
        console.log(this.counter);
    }
};

obj.incrementCounter(); // -> 1
obj.incrementCounter(); // -> 2
obj.incrementCounter(); // -> 3