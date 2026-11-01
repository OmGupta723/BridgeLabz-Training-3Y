"use strict";

function applyOperation(numbers, operation) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }

    return result;
}

let numbers = [1, 2, 3, 4];

let double = applyOperation(numbers, function(num) {
    return num * 2;
});

let square = applyOperation(numbers, function(num) {
    return num * num;
});

console.log("Double:", double);
console.log("Square:", square);