/*

DOM is such a technology, with the help of which we can completely control any html document with javascript.
With the help of DOM, we can access and change any tag, id, class or any attribute, even we can change ant css style from DOM.

Methods =>

1. getElementById()
2. getElementByClassName()
3. getElementByTagName()
4. querySelector()
5. querySelectorAll()

*/






// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d
// We need to solve this using two methods
// using nested if
// using logical operators




// const number = 11;

// if(number % 2 == 0){
//     if(number > 15){
//         console.log("a")
//     }else{
//         console.log("b")
//     }
// }
// else if(number % 2 !== 0){
//     if(number < 10){
//         console.log("c")
//     }else{
//         console.log("d")
//     }
// }

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
console.log(countries.map(x => x.toUpperCase()))

