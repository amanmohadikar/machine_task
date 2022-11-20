const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];


// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

// function profileLookup(name, property) {
//     if(name !== "Pritesh"){
//         console.log("person does not exist ")
//     }else{
//         console.log(name)
//     }

//     if(property !== "22222222"){
//         console.log("no such  property")
//     }else{
//         console.log(property)
//     }
//     }
//     profileLookup("Pritesh","22222222");



// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //
// function abc(greet){
// console.log(facebookProfiles.filter(a => a.address.location == greet).map(a => a.firstName))
// }
// abc("gurgaon")


//complete the above functin such that it returns the list of names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

// function findName(stateName){
//     console.log(facebookProfiles.filter(a => a.address.state == stateName).map(a => a.firstName))
// }
// findName("rajasthan")

// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //



// function fullName(isLocation){
// let x = (
//     facebookProfiles.filter(a => a.hasDrivingLicense).filter( a => a.address.location == isLocation).map(a => a.firstName)
//     )
// let y = facebookProfiles.filter(a =>a.hasDrivingLicense == false).filter(a => a.address.location == isLocation).map(a => a.firstName)
// console.log(x + "-D/L" , y + "- N D/L")
// }
// fullName("gurgaon");

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //




// function allName(fullname){
// for(let i = 0;i<facebookProfiles.length;i++){

//     let x = (facebookProfiles[i].firstName)
//     let y =  (facebookProfiles[i].lastName)
//     let z = (x +" "+" "+ y)
//     console.log([z])
// }
// }
// allName(facebookProfiles)

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //





// function sum(x){
//     for(let i = 0;i<facebookProfiles.length;i++){
//         const result = facebookProfiles[i]
       
//         console.log(result.likes)
//     }
// }
// sum(facebookProfiles.likes)


// let i = facebookProfiles[0].likes  
// let j = facebookProfiles[1].likes  
// let k = facebookProfiles[3].likes  
// let l = facebookProfiles[4].likes  
// let m = ([i + " , " + j + " , " + k + " , " + l])




// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //


// function liveDelhi(){
//     for(let i = 0;i<facebookProfiles.length;i++){
//         const a = facebookProfiles[i]

//         if(a.address.state == "delhi"){
//             console.log(a.firstName)
//         }else{
//             console.log("no such person")
//             break;
//         }
//     }
// }
// liveDelhi()

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //


// console.log(facebookProfiles.filter(a => a.hasDrivingLicense == false).map(a => a.firstName).filter(a => a.likes == "driving"))

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh

