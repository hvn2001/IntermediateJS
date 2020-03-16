const obj = {
    printVal: "Print value",
    generatePrintFn: function () {
        return () => console.log(this.printVal);
    },
};
// Using an arrow function, this inside the new returned function is permanently set to obj
const print = obj.generatePrintFn();
print(); // -> Print value