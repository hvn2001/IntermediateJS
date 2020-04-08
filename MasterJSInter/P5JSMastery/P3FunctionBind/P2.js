Function.prototype.Bind = function (thisArg, ...args) {
    const self = this;
    return function (...nextArgs) {
        return self.call(thisArg, ...args, ...nextArgs);
    }
};