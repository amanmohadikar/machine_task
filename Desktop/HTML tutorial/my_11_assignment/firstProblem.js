// 1. Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(x) {
  
//     for(let i = 0;i<x.length/2;i++){

//         if(x[i] !== x[x.length - 1- i]){

//             return "It is not a palindrome";
//         }

//     }return "It is a palindrome";
    
// }
// console.log(isPalindrome("madam"));




// 2.  Given a string, you have to return a string in
// which each character (case-sensitive) is repeated once.



// function doubleChar(str){

//   var New = " ";

//   for(let i = 0;i<str.length;i++){

//     New += str[i]+str[i];

//   }
//   return New;

// }console.log(doubleChar("Aman"))



// 3.  Given a string, write a function that returns the string with a question mark ("?") appends to the end,
// unless the original string ends with a question mark, in which case, returns the original string.


// function ensureQuestion(s) {
//   return s.split('?').join('').concat('?')
// }
// console.log(ensureQuestion("No"))



// 4.  Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt



// function add(a,b){
//   return a + b;
// }
// console.log( "The addition of a and b is : " + add(15,14))



// function divide(a,b){
//   return a / b;
// }
// console.log( "The division of a and b is : " + divide(15,14))



// function multiply(a,b){
//   return a * b;
// }
// console.log( "The multiplication of a and b is : " + multiply(15,14))



// function mod(a,b){
//   return a % b;
// }
// console.log( "The mod of a and b is : " +  mod(60,12))
 
// function exponent(a,b){
//   return a ** b;
// }
// console.log( "The exponent of a and b is : " + exponent(1,2))


// function subt(a,b){
//   return a - b;
// }
// console.log( "The substraction of a and b is : " + subt(1,2))



// 5.  Make a function that will return a greeting statement that uses an input;
//  your program should return, "Hello, <name> how are you doing today?".


// function greet(name){
//   return(`Hello, ${name} how are you doing today?`)
// }
// console.log(greet("Aman"))








// 6.  In this little assignment you are given a string of space separated numbers,
//  and have to return the highest and lowest number.

// function highestAndLowest(numbers){
//   return( Math.max(1, 2, 3, 4, 5) + " " +  Math.min(1, 2, 3, 4, 5));
// }

// console.log(highestAndLowest())




// 7.  Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.


// function invert(array){
// for(let i = 0;i<array.length;i++){
//   const result = array[i]
//   if(result){
//     console.log(result * -1)
//   } 
// }
// }
// invert([1,2,3,-4,5])




