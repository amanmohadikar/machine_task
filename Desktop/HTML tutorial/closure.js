/*
closure => 
closure in action that is inner function can have access to the outer
function variables and parameter as well as all the global variables .

A closure is the combination of a function and the lexial
environment within which that function was declared.
*/

// function outer(a){
//     let b = 10;

//     function inner(){
//         let sum = a + b ;
//         console.log(sum)

//     }inner()
// }
// outer(10)




// function india(city){
//     const Capital = "The capital of india is : "

//     function india2(){
//         console.log(Capital + city)
//     }
//     india2()
// }
// india("Mumbai")



/*
Scope Chain => 
The Scope chain is used to resolves the value of variable names in javascript.


Lexical Scope =>
A function that is lexically within another function get access 
to the scope of the outer function.(Inner function can get access to
their parent function variables.
    */


// const a = "Hi.. "
// function first(){
//     const b = "My name is Aman"
//     second();


//     function second(){
//         const c = "I am from nagpur"
//         console.log(a,b,c)
//     }
// }
// first()





// const a = "Hello... "

// function outer(){
//     const b = "How are you "
//     inner()


//     function inner(){
//         const c = "My name is Aman "
//         innerMost()


//         function innerMost(){
//             const d = "Plz subscribe my channel"
//             console.log(a+b+c+d)
//         }
//     }
// }
// outer()