const obj = {
    printVal: "Print value",
    generatePrintFn: function () {
        return function () {
            console.log(this.printVal);
        }
    },
};

const print = obj.generatePrintFn();
print(); // -> undefined