const obj = {
    _val: 'value',

    get value() {
        return this._val;
    },

    set value(val) {
        this._val = val;
    }
};

Object.freeze(obj);

obj.value = 4; // fails
console.log(obj.value); // -> value