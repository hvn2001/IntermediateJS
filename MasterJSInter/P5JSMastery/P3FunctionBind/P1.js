// ES5
Function.prototype.Bind = function () {
    var fnToBind = this;
    var argsToBind = Array.prototype.slice.call(arguments);
    var thisArg = argsToBind.shift();

    return function () {
        var newArgs = Array.prototype.slice.call(arguments);
        var allArguments = [].concat(argsToBind, newArgs);
        return fnToBind.apply(thisArg, allArguments);
    }
}