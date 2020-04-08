// Change this getter method such that
// when we attempt to access the property
// 'val', it multiplies by 2 every time.

// Ex:
/*
console.log(obj.val); -> 2
console.log(obj.val); -> 4
console.log(obj.val); -> 8
console.log(obj.val); -> 16
*/

const obj = {
    _val: 1,
    get val() {
        this._val = this._val * 2; // this._val *= 2;
        return this._val;
    }
};