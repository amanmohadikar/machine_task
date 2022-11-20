//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']

// const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
// let [,place2,place3,place4] = places
// console.log(place2,place3,place4)



//2.

// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

// const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// const name = morePlaces.unshift("delhi")
// let [...a] = morePlaces
// console.log(a)



// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]



// let morePlacesArray = ["nagpur", "Mumbai" ,  ' delhi ', 'gurgaon ', 'jaipur',  ]
// let places = [ 'hyderabad ', 'Shimla ', 'Srinagar ', " pune", "banglore",]



// let [a,b,...c] = morePlacesArray
// let[d,e,f,,] = places
// console.log(d,e,f,...c,)




// 4.
// destructure and store pincode into a variable named myPincode


// let myData = {
//     name: "Rahul",
//     age: 20,
//     gender: "male",
//     address: {
//       pinCode: 123455,
//       city:"delhi"
//     },
//     likes:["music", "movies"]
//   }


// let {address} = myData
// let myPincode = address.pinCode
// console.log(myPincode)

  
// 5.
// destructure and store second like into a vaiable named myLike
  

//  let myData = {
//       name: "Rahul",
//       age: 20,
//       gender: "male",
//       address: {
//         pinCode: 123455,
//         city:"delhi"
//       },
//       likes:["music", "movies"]
//     }


//     let {likes} = myData
//     let myLike = likes[1]
//     console.log(myLike)


function typeOfSum(a, b) {
    return (typeof (a+b))
  }
  console.log(typeOfSum("12",1))


