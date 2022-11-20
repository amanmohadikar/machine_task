// write your own find and findIndex function
// (Hint: using for loop and if else)


// My own find Function

function myOwnFind(indEx){
return (indEx.find(a => a % 3 == 0))
}
console.log(myOwnFind([1,5,4,6,2,33,6,30]))




// My own findIndex Function

function myOwnFindIndex(indEx){
  return (indEx.findIndex(a => a - 5 == 0))
  }
  console.log(myOwnFindIndex([2,6,5,4,3,77]))



// ======================================================== //



const practiceData = [[14,21,23,64], [33,46,51,65]]

const result = practiceData.map((x) => x.map(innerElement => innerElement + 1))
console.log(result)



 
// ======================================================== //

    const array = [23 , 45,467, 789, 34, 989, 56]
    
    for(let i = 0;i<array.length;i++){
      if(i % 2 === 0){
        console.log(array[i] * 2)
      }
      
      else
      {
        console.log(array[i] * 10)
      }
    }

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10

// ======================================================== //




 const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]
 
const carObject = carBrands.reduce((  acc  , elem , ind ) => { return { ...acc, [elem] : carModel [ind]  }
},{})
console.log(carObject)



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
//   */
 const arrays = [[1, 2, 3], [4, 5], [6]];
let x = arrays.reduce((arr1,arr2) => arr1.concat(arr2))
console.log(x)

// ======================================================== //
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

console.log(countries.map(a =>  a.toUpperCase()))


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */

// ======================================================== //





