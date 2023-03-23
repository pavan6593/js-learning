//1. Find minimum and maximum value in an array

const numbers = [10,20,25,45,54,85,20,25,45,54,85];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log(max);
console.log(min);


//2. Remove duplicates from an array?

function removeDuplicates(arr) {
    let unique = [...new Set(numbers)]
    // return [...new Set(numbers)];
    return unique;
}

console.log(removeDuplicates());

//3. How to check if two String are Anagram?

// let firstString = "fired";
// let secondString = "fried";

// let a = firstString.split("").sort();
// console.log(a);
// let b = secondString.split("").sort();

function isStringAnagram(firstString, secondString){
    let a = firstString.split("").sort();
    let b = secondString.split("").sort();
    if(a.length==b.length){
        for(let i=0; i<a.length; i++){
            if(a[i]!=b[i]){
                console.log("Strings are not Anagram!");
                return false;
            }
        }
        console.log("Strings are Anagram!");
    }
    else console.log("Strings are not Anagram!");
}

isStringAnagram("fired", "fried");



let temp = "This is a string."; 
alert(temp.count("is")); 
