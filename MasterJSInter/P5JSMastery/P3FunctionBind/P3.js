Function.prototype.Bind = function (thisArg, ...args) {
    return (...nextArgs) => this.call(thisArg, ...args, ...nextArgs);
}