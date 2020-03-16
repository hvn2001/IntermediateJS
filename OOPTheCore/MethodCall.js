const obj = {
    str: 'Hello!',
    fn: function () {
        console.log(this);
    }
};

obj.fn(); // -> { str: 'Hello!', fn: [Function: fn] }