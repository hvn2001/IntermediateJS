const obj = {
    value: 5,
    printThis: function () {
        console.log(this);
    }
};
//  If a function is called as a method
obj.printThis(); // -> { value: 5, printThis: ƒ }