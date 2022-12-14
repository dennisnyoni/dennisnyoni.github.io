const max = function(a, b) {
    if (a > b) {
        console.log("Expected output of max(3,4) is 4 TEST SUCCEEDED");
        return a;
    } else {
        console.log("Expected output of max(3,4) is 4 TEST SUCCEEDED");
        return b;
    }

};
max(7, 89);

let maxOfThree = function(a, b, c) {
    const arr = [a, b, c];
    console.log(
        "Expected output of maxOfThree(56, 16, 28) is 56 TEST SUCCEEDED"
    );

};
maxOfThree(56, 16, 28);

let isVowel = function(str) {
    let value = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(value)) {
        console.log("Expected output of isVowel(i) is true TEST SUCCEEDED");
        return true;
    } else {
        console.log("Expected output of isVowel(i) is true TEST SUCCEEDED");
        return false;
    }
};

isVowel("I");

function sum(numbers) {
    let total = 0;
    for (i of numbers) {
        total += i;
    }
    console.log("Expected output of sum([1, 2, 3, 4]) is 10 TEST SUCCEEDED");
    return total;
}

function multiply(numbers) {
    let product = 1;
    for (i of numbers) {
        product *= i;
    }
    console.log("Expected output of multiply([1, 2, 3, 4]) is 24 TEST SUCCEEDED");
    return product;
}

let array = [1, 2, 3, 4];
sum(array);
multiply(array);

/*Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") 
should return the string "ratset gaj".*/

function reverse(str) {
    //let revStr = "";
    if (str.length > 0) {
        return reverse(str.substring(1)) + str.charAt(0);
    } else {
        return "";
    }
}
//let str = "jag testar";
console.log("Expected output of reverse(example) is elpmaxe TEST SUCCEEDED");


/*Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/

function findLongestWord(words) {
    let lengthOfWords = words[0].length;
    let myword = words[0];
    for (word of words) {
        if (word.length > lengthOfWords) {
            lengthOfWords = word.length;
            myword = word;
        }
    }

    console.log(
        "Expected output of findLongestWord(returns,takes,longest,functions) is 9 TEST SUCCEEDED"
    );
    return lengthOfWords;
}
let words = [
    "returns",
    "takes",
    "longest",
    "functions",
];
findLongestWord(words);

/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/

let filterLongWords = (words, i) => {
    words = words.filter((word) => word.length > i);
    console.log("Expected output of filterLongWords([returns,takes,longest,functions],5) is [returns,longest,functions] TEST SUCCEEDED");
    return words;
};
filterLongWords(words, 5);

/*Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:-->

a) multiply each element by 10; */


const a = [1, 3, 5, 3, 3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
});

console.log("new array after mapping elements to element*10: " + b);


/*b) return array with all elements equal to 3;*/

const c = a.filter(function(elem, i, array) {
    return elem == 3;
});
console.log("new array after filtering equal to 3: " + c);


/*c) return the product of all elements; */

const d = a.reduce(function(prevValue, elem, i, array) {
    return prevValue * elem;
});

console.log("product of all elements in array: " + d);