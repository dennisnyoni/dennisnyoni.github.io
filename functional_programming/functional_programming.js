"use strict"
let array = [1, 2, 3, 4];
let word = "hello";
let words = ["first", "second", "third", "fourth", "fifth", "sixth", "seven", "eight", "nine"];
sum = array.reduce(function(number, current) { number + current });
console.log(sum);

let multiply = array.reduce(function(number, current) { number * current });
console.log(multiply);

let reverse = word.map(character => word.charAt(word.length - 1 - word.indexOf(character)));
console.log(reverse);

let filterLongWords = words.filter(function(str, i) { return str.length > i });
console.log(filterLongWords);