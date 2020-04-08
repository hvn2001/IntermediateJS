const obj = {
    printVal: "Print value",
    generatePrintFn: function () {
        console.log(this.printVal);
    },
};

const print = obj.generatePrintFn.bind(obj);
print(); // -> Print value