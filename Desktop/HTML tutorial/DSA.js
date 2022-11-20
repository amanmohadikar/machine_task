// 1. Given an array of integers, write a program to display the product of array elements.

// function  display(arr){
//     let sum = 1;
//     for(let i = 0;i<arr.length;i++){
//         sum *= arr[i]
//     }return sum
// }
// console.log(display([1,2,3,4,5,6]))



// 2. Given an array of N integers, find the largest gap between any two elements of the array.
// In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.

// function largestGap(arr){
//     let max = arr[0]
//     let min = arr[0]
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//         if(arr[i]<min){
//             min = arr[i]
//         }
//     }return max - min;
// }
// console.log(largestGap([3,6,7,10]))


// 3. Given an array of integers, write a program to rotate the array to the right side K times.


// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numberOfShifts = 3;
// function rotateArray(arr, numberOfShifts) {

//     for (let i = 0; i < numberOfShifts; i++) {
//         arr.unshift(arr.pop())
//     }
//     return arr;
// }
// console.log(rotateArray(nums, numberOfShifts))


// 4. Given an array of integers, copy elements of one array into another array of the same size.

// function copyElement(arr){
//     let copy = [...arr]
//     return copy.join(" ")
// }
// console.log(copyElement([1,2,3]))




// 5. Given an array of integers, find all the prime numbers in the array.



// 6. Given an array of integers, delete each element from the array which is a multiple of 5, and display the rest of the array.

// function deleteOfArray(arr){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] % 5 == 0){
//             console.log( arr[i])
//         }
//     }
// }
// deleteOfArray([2,3,4,11,22,320])


// 7. Given an array of integers, write a program to delete the element at index K.

// function deleteElement(arr,k){
//     let regex = /0-99/
//     let sum =0;
//     for(let i = 0;i<arr.length;i++){
//         if(k == 2){
//             sum = arr[i]
//         }
//     }return sum;
// }
// console.log(deleteElement([1,2,3,4,5,6,7,8,9,10],5))

// 8. Given an array of integers, find the absolute difference between the first and last element of the array.

// function absoluteDifference(arr) {
//     let difference;
//     for (let i = 0; i < arr.length; i++) {
//         difference = arr[arr.length - 1] - arr[0]
//     } return difference
// }
// console.log(absoluteDifference([1, 2, 3, 4]))


// 9. Given an array of integers, find the number of inversions in it. Inversion Count for an array indicates – how far (or close) the array is from being sorted. If an array is already sorted then inversion count is 0. If an array is sorted in reverse order that inversion count is the maximum.
// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.


