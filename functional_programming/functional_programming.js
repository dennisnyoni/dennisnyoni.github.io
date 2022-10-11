"use strict"
let array = [1, 2, 3, 4];
sum = array.reduce(function(number, current) { number + current });
console.log(sum);

let multiply = array.reduce(function(number, current) { number * current });
console.log(multiply);