/*
A javascript function is a block of code designed to perform a specific task.

A javascript function is execute when something call it.

A javascript function is defined with the function keyword,, its name and parentheses().

Function name contain letters, digit, underscores, and doller signs(Same rule as variable).

The parenthesis may include paremeter names seperated by commas.

There are three types of function in javascript .
1. Function declaration 
2. Function Expression
3. Arrow Function
*/

// function add(a,b){
//     console.log(a+b);
// }
// add(2,3)



// const add = function (a,b){
//     console.log(a+b);
// }
// add(2,3)


// const add = (a,b) => a + b;
// console.log(add(2,3))






// let a = [1,2,3,4,5,6,7,8,9,10];
// console.log( a.reduce  (( x, y  ) => x + y))




// function average(a,b){
//     return (a + b)/2
// }

// let a = 1;
// let b = 2;
// let c = 3;

// console.log(average(a,b))
// console.log(average(b,c))
// console.log(average(a,c))


// const name = (p,q)=>{
//     return p + q;
// }

// console.log(name(9,7))


// const  hello = ()=>{
//     console.log("hii, my name is  aman")
// }
// hello();



// const averageOfTwoNumbers  = (one,second) =>{
//     return (one +second)/2
// }
// let first = 12;
// let second = 6;
// console.log(averageOfTwoNumbers(first,second))



// const no = (t,d) =>{
//     return t +d;
// }
// let ek = 3;
// let don = 5;
// console.log(no(ek,don))



// function add(a,b){
//     return a + b
// }
// // let c = add(12,13)
// console.log(add(12,13))



// function average(a,b){
//     return (a + b)/2
// }

// console.log(average(12,6));





// function cookMaggi(maggi, water, cup){
//     return ("Your maggi will be ready in "+ maggi * 2 + " Minutes And ingrediants use are : " + maggi + " maggi  " + water + " water " + cup + " cup ")
// }
// console.log(cookMaggi(2,8,2))



// write your own find and findIndex function
// (Hint: using for loop and if else)


// ======================================================== //



// let arr1 =  [[15,22,24,65], [34,47,52,66]];
// console.log(arr1.map(x => x.map(a => a + 1)))


/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]

 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */


// ======================================================== //


// problem => return an array such that numbers at odd idex are multiplied by 2
// and numbers at even index are multiplied by 10

// const array = [23 , 45,467, 789, 34, 989, 56]

// for(let i = 0;i<array.length;i++){
//   if(i % 2 === 0){
//     console.log(array[i] * 10)
//   }

//   else
//   {
//     console.log(array[i] * 2)
//   }
// }
// ======================================================== //




//    const carBrands = ["honda", "toyota", "maruti","tata"]
//    const carModel = ["city", "innova", "alto", "nano"]

//   const carObject = {}
//  using a higher order method, create a carObject variable such that 
/**
 * 
 * {
 * honda:city,
 * toyota:innova,
 * maruti:alto,
 * tata:nano
 * }
 */


// ======================================================== //


/**
 *  Flattening
Use the reduce method 
to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
const arrays = [[1, 2, 3], [4, 5], [6]];
// result =  [1, 2, 3, 4, 5, 6]
 * 
 * 
 */


// ======================================================== //


/**
 * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
 * return an array with all words converted into uppercase using higher order function
 * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
 * 
 * 
 * 
 */

// ======================================================== //
//   const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
//   const upper = countries.map(element => {
//     return element.toUpperCase();
//   });
//   console.log(upper)


// function square(number){
//   return number * number
// }

// console.log(square(3))


// const square = function (number){
//   return number * number
// };

// function displayFunction(fn){
//   return(fn(5))
// }

// console.log(displayFunction(square))


// let num1 = 3;
// let num2 = 20;
// function name(){
//   return num1 * num2
// }
// console.log(name())



// function average(a,b){
//     return(a+b)
//   }
//   console.log(average(12,6))







// function greet() {
//   let a = 7;


//   function greet2() {
//     console.log(a)

//   } greet2()
// }
// greet()





