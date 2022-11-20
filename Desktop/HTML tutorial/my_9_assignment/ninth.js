// 1.

// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d
// We need to solve this using two methods
// using nested if
// using logical operators


// let a = 21;
// if(a % 2 == 0 &&  a < 15){
//     console.log("a")
//     if(a % 2 == 0 && a >= 15){
//     }
// }
// else{
//     console.log("b")
// }


// if(a % 2 != 0 && a < 10){
//     console.log("c")
//     if(a % 2 != 0 && a > 10){

//     }
// }else{
//     console.log("d")
// }



// problem 2
// Result
// answer should be: "Hi, my name is Farheena"
// we need to solve this using for loop

// let a = "Hii, my name is Farheena"
// for(let i = a; i<=a;i++){
//     console.log(i)
// }




//3. local scope and global scope

// let a = 34;
// {
//     let a = 45;
//     console.log("This is local scope :"+ a)
// }
// console.log("This is global scope :"+ a)



// problem 4
// create a variable called myName and store your name inside it.
// then, add Mr./Miss. before it and store the result in
// a new variable with the same name i.e. myName.


// let myName = "Aman"
// let first = "Mr."
// myName = first + myName
// console.log(myName)


// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20


// let a = 20;
// let b = 0;
// let c = 1;
// for(let i = 10;i<=20;i++){
//     b = b + i;
//     c = c * i;
// }console.log(b)
// console.log(c)




// problem 6
// Check whether a given year is a leap year
// create a variable and store a random year in it
// now write code, which should return true or false, depending whether the value in the above
// variable is leap year or not

// let year = 1900;
// if(year % 4 == 0 && year % 100 != 0){
//     console.log("Leap Year")

// }else if(year % 400== 0){
//     console.log("Leap Year")
// }else{
//     console.log("Not leap Year")
// }



// problem 7
// find the area of a triangle. Lengths of its sides are 5, 6, 7


// var firstSide = 5; 
// var secondSide = 6; 
// var thirdSide = 7; 
// var sumOfThreeSide = (firstSide + secondSide + thirdSide)/2;
// var areaOfTriangle =  Math.sqrt(sumOfThreeSide*((sumOfThreeSide-firstSide)*(sumOfThreeSide-secondSide)*(sumOfThreeSide-thirdSide)));
// console.log(areaOfTriangle);



// problem 8
// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)



// let first = 50;
// let second = 30;
// if(first === 50 || first + second === 50){
//     console.log("true")
// }else{
//     console.log("false")
// }


// problem 9
// create a variable and store a number inside it
// write program to check whether a given variable is between 100 and 200
// write program to check whether a given variable is between 100 and 200 or 400 and 500
// handle edge cases


// let one = 123;

// if(one >= 100 && one <= 200){
//     console.log("This number is between 100 ans 200")
// }

// if(one >= 400 && one <= 500){
//     console.log("This number is between 400 and 500 ")
// }


// problem 10
// you have 3 numbers.
// write a program which can find the largest number


// const firstNumber = 45;
// const secondNumber = 65;
// const thirdNumber = 98;

// if(firstNumber > secondNumber){
//     console.log("First number is largest")
// }else if(thirdNumber > secondNumber){
//     console.log("Third numbner is largest")
// }else{
//     console.log("Second number is largest")
// }


// problem 11
// create two variables and assign numbers to them
// now write a code which returns true if one of them is 8 or their sum or difference is 8. Otherwise
// it should return false

// const rahul = 4;
// const rohan = 8;
// if(rahul == 8 || rohan == 8 || rahul + rohan == 8 || rahul - rohan == 8){
//     console.log("True")
// }else{
//     console.log("False")
// }




