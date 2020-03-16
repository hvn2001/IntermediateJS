const obj = {
    printVal: "Print value",
    generatePrintFn: function () {
        let self = this;

        return function print() {
            console.log(self.printVal);
        }
    },
};

const print = obj.generatePrintFn();
print(); // -> Print value