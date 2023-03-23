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


//4. How to count the occurrence of a given character in a String?

let temp = "This is a string."; 

function charOccurrenceIndex(char){
    for (let index = 0; index < temp.length; index++) {

        if (temp[index] === char[0]) {
            console.log(index);
            return index;
        }
        
    }
}
charOccurrenceIndex("is");


//5. How to find the first non repeated character of a given String?

let myString = "apple"
let stringToArray = myString.split("");
let nonRepeatedChars = [...new Set(stringToArray)];
console.log(nonRepeatedChars.join(""));

   //Contevrting in function
   function uniqueChars(newString){
    let stringToArray = newString.split("");
    let nonRepeatedChars = [...new Set(stringToArray)].join("");
    console.log(nonRepeatedChars);
    return nonRepeatedChars
   }
   uniqueChars("Happyness");


//6. Write a function to find out longest palindrome in a given string?
 function longestPalindrome(givenString){
    let sLength = givenString.length;
    let longestPalindrome = "";
    for (let i = 0; i < sLength; i++) {
        for (let j = i+1; j <= sLength; j++) {
            let subString = givenString.slice(i, j);
            if (subString == subString.split("").reverse().join("")&& subString.length > longestPalindrome.length) {
                longestPalindrome = subString;
            }
        }
        
    }
    console.log(longestPalindrome);
    return longestPalindrome;
 }

 longestPalindrome("Happyness");


 //7. Print all permutation of String both iterative and Recursive way? - Not getting the concept of permutation of th string.



//8. Write code to check a String is palindrome or not?
function isPalindromeMethodOne(string){
    if (string === string.split("").reverse().join("")) {
        console.log(`The string "${string}" is palindrome.`);
        return true;
    }else{
        console.log(`The string "${string}" is not palindrome.`);
        return false;
    }
}
isPalindromeMethodOne("aabbaa");

function isPalindromeMethodTwo(string){
    for (let index = 0; index < string.length; index++) {
        if (string[index]!==string[string.length - index - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindromeMethodTwo("ababa"));



//9. Write a method which will remove any given character from a String?



//10. Write a program to find intersection of two sorted arrays.
function findIntersection(array1, array2){
    let intersection = [];
    for (let i = 0; i < array2.length; i++) {
        if (array1.includes(array2[i]) && !intersection.includes(array2[i])) {
            intersection.push(array2[i]);
        }
    }
    result = intersection
    return intersection;
}

let arr1 = [2,1,2,3,6,5,4,6,7,7,4,8,6,4,3,2,3,4,6,7,8,5,4,33,2,3,22]
let arr2 = [1,2,3,4,5,5,3,4,5,6,2,6,9]
console.log(findIntersection(arr1, arr2));