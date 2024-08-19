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

// forEach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
};

function printWithIndex(element, index) {
    console.log(`Element: ${element}, Index: ${index}`);
}

// a.myForEach(printWithIndex);

// Output
// Element: 1, Index: 0
// Element: 2, Index: 1
// Element: 3, Index: 2
// Element: 4, Index: 3
// Element: 5, Index: 4

// map
Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
};

let mappedArr = a.myMap((element) => element * 2);
// console.log(mappedArr); // Output: [2, 4, 6]

// filter
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            result.push(this[i]);
        }
    }
    return result;
};

let filteredArr = a.myFilter((element) => element > 2);
// console.log(filteredArr); // Output: [3, 4, 5]

//reduce
Array.prototype.myReduce = function (callback, initialValue) {
    accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
};

let sum = a.myReduce((acc, element) => acc + element, 0);
// console.log(sum); // Output: 15

// some : checks if at least one element passes the condition
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
};

let hasElementGreaterThan3 = a.mySome((element) => element > 3);
// console.log(hasElementGreaterThan3); // Output: true

// find : find the first element in the array that meets the condition
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return "Not found";
};

let foundElement = a.myFind((element) => element > 5);
// console.log(foundElement);  // Output: Not found

// findIndex : find the index of the first element in the array that meets the condition
Array.prototype.myFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};

let foundIndex = a.myFindIndex((element) => element > 2);
// console.log(foundIndex); // Output: 2

// sort : sorts the array in ascending order
// Also learned how to write comparator function
Array.prototype.mySort = function (compareFunction) {
    // bubble sort
    let arr = this.slice(); // Create a copy of the array
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compareFunction(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements, this is like Python
            }
        }
    }
    return arr;
};

let sortedArr = a.mySort((a, b) => a - b);
// console.log(sortedArr); // Output: [ 1, 2, 3, 4, 5 ]

// reverse : reverse the array (out of place)
Array.prototype.myReverse = function () {
    const arr = this.slice(); // Create a copy of the array
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }

    return arr;
};

let reversedArr = a.myReverse();
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
