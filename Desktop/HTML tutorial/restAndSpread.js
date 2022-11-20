// Rest operator => Rest operator is used to collect multiple
//  element and condense them into single element by
//   using triple dots.




// function addNumbers(a,b,...c){
//     return c
// }
// console.log(addNumbers(15,14,13,12,11));


// let student = {
//     name : "aman",
//     roll_no : "333",
//     hobbies : ["cricket","singing"]
//  }
// const {...rest} = student;
// console.log(rest)



// function greet(product, ...Id){
//     console.log(Id)
// }
// greet("himalaya",11,12,13,14,15,16)





// let fruits = ['Apple','Orange','Banana'];

// let newFruitArray = [...fruits];

// console.log(newFruitArray);



/* Spread operator => Spread syntax looks exactly like
 rest syntax. spread syntax is the opposite of rest syntax.
Spread syntax "expands" an array into its elements,
while rest syntax collects multiple elements and
"condenses" them into a single element . */


// let names = ["aman","shubham","ravan","jivan"]
// function getNames(name1,name2,name3,names4){
//     console.log(name1,name2,name3,names4);
// }
// (getNames(...names));



// function sum(x, y, z) {
//     return x + y + z;
//   }
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));


// let arr1 = ["nihar","jam","roval"]
// let arr2 = ["vartika","noval","bria"]
// let result = [...arr1,...arr2]
// console.log(result)



// let fruits = ["apple","orange","mango","banana"];
// let original = ["cheery",...fruits];
// console.log(original)



// let obj ={
//     name : "naman",
//     age : 23,
//     hobbies : ["singing","dancing"]
// }

// let obj2 = {
//     grade : "A",
//     section : "A",
//     rank : "A"
// }


// const result = {...obj, ...obj2}
// console.log(result)
 

// let a = [1,2,[1,4,2]];

// let b = [...a]

// a[2] = 12;

// console.log(b)






