function Fn() {
}

Fn.prototype.print = function () {
    console.log("Calling Fn.prototype's print method");
};


const obj = new Fn();
obj.print(); // -> Calling Fn.prototype's print method