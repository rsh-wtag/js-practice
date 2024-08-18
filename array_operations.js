// creating an array
let a = [1, 2, 3, 4, 5];

// indexOf
Array.prototype.myIndexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return i;
        }
    }
    return -1;
};

// includes
Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) {
            return true;
        }
    }
    return false;
};

console.log(a.myIncludes(3));
