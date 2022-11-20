


/*

Higher Order Function => A function which takes another function as an argument or returns a function is known as a higher order function.

Reduce method => 
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value .

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

Suppose I have an array and I want to do sum of whole array element
 then i will use reduce method, reduce method will return single
value. 


// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr1.reduce((previousElement , currentElement ) => 
// previousElement + currentElement))




Map Method =>
map create a new array from calling a function for every array element.
Map() calls a function once for each element in an array. Map() does not
execute the function for empty elements. Map() does not change the original array. 

Suppose i want to multiple each element of an array by 2 then i will use map method .

const a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.map(x => x * 2))





forEach method =>

let arr = [2,45,54,2,33,45,5];
arr.forEach((arr) => console.log(arr))



filter method => 
let arr = [2,4,6,4,2,3,1]
console.log(arr.filter(x => x%2 == 0))

*/











// function interviewQuestion(name){
//     if(name === "Aman"){
//         return function (topic){
//             console.log(`Hii ${name}, Explain ${topic}`)
//         }
//     }
//     if(name === "Kunal"){
//         return function (topic){
//             console.log(`Hii ${name}, Whai is ${topic} `)
//         }
//     }
// }
// interviewQuestion("Aman")("ui")
// interviewQuestion("Kunal")("Javascript")


