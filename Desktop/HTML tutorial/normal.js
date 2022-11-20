// let a = [1,2,3,4,10];
//map

// let c = a.map(x => x * 2)
// console.log(c)

// filter

// let b = a.filter(x => x < 2)
// console.log(b)

// reduce

// let d = a.reduce((acc,curr) => acc + curr)
// console.log(d)



// const facebookProfiles = [
//     {
//         firstName: "Akash",
//         lastName: "Agarwal",
//         number: "111111111",
//         likes: ["music", "movies"],
//         hasDrivingLicense: false,
//         address: {
//             location: "rampur",
//             state: "up",
//         },
//         emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
//     },
//     {
//         firstName: "Pritesh",
//         lastName: "Kumar",
//         number: "222222222",
//         likes: ["code", "driving"],
//         hasDrivingLicense: false,
//         address: {
//             location: "gurgaon",
//             state: "haryana",
//         },
//         emails: ["fgdfg@gmail.com"],
//     },
//     {
//         firstName: "Sabiha",
//         lastName: "Khan",
//         number: "333333333",
//         hasDrivingLicense: false,
//         address: {
//             location: "lucknow",
//             state: "up",
//         },
//     },
//     {
//         firstName: "Suyash",
//         lastName: "Kashyap",
//         number: "444444444",
//         likes: ["travel", "driving"],
//         hasDrivingLicense: true,
//         address: {
//             location: "alwar",
//             state: "rajasthan",
//         },
//         emails: ["abc@yahoo.com"],
//     },
//     {
//         firstName: "Jay",
//         likes: ["food", "mobile"],
//         hasDrivingLicense: true,
//         address: {
//             location: "gurgaon",
//             state: "haryana",
//         },
//         emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
//     },
// ];





// i want to do first name is uppercase who have email

// console.log(
// facebookProfiles.filter(a => a.emails).map(a => a.firstName.toUpperCase())

// )


    
// i want to do uppercase state who have like

// console.log(
//     facebookProfiles.reduce((acc,a) => {
//         if(a.likes){
//             acc.push(a.address.state.toUpperCase())
//         }
        
//         return acc
//     }, [])
// )



// console.log(
//     facebookProfiles.reduce((acc,a) => {
//         if(a.address.state == "up"){
//             acc.push(a.firstName.toUpperCase())
//         }
//         else{
//             return ("no such person")
//             }
//             return acc
//     },[]
//     )
// )


//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"
// console.log(
//     facebookProfiles.filter(a => {
//         if(a.address.location == "delhi" && a.hasDrivingLicense == true){
//             console.log(a.firstName) 
//         }else{
//             console.log("no such person")
            
//         }
//     })

// )


const companies = [
    {name : "Google", Category : "Product Base", start : 1981, end: 2004},
    {name : "Amazon", Category : "Product Base", start : 1992, end: 2008},

    {name : "Paytm", Category : "Product Base", start : 1999, end: 2007},

    {name : "Coforge", Category : "Service Base", start : 1989, end: 2010},

    {name : "Mindtree", Category : "Service Base", start : 1989, end: 2010}

];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Map method

// console.log(ages.map(x => x * 10))

// console.log(companies.map(x => x.name))


// I want to print all elements whose greater than 60

// for(let i = 0;i<ages.length;i++){
//     if(ages[i] > 60){
//         console.log(ages[i])
//     }
// }


// console.log(ages.filter((x) => x>60))


// I want all service base company

// console.log(companies.filter((company) => 
// company.Category == "Service Base"))





// I want company name as well as category
// There are Three ways

// for(let i = 0;i<companies.length;i++){
//     console.log(companies[i].name + " = " + companies[i].Category)
// }

// companies.forEach(function(company,index){
//     console.log(company.name+" = "+company.Category)
// });


// companies.forEach((x,ind) => {
//     console.log(x.name + " = " + x.Category,ind)
// })








// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]




// console.log(
//     facebookProfiles.filter(a => a.address.location == "gurgaon").map(a => a.firstName)
// )

// i want to concat numbers

// console.log(facebookProfiles.filter(a => a.number)
// .reduce((totalNumbers,a) => a.number + totalNumbers ,0))





// let a = [1,2,3,4,5]
// let sum = 0
// let b = a.reduce((acc,a) => acc+a)
// console.log(b)


// optional 


// for(let i = 0;i<=a.length;i++){
// sum = sum + i
// }
// console.log(sum)

// let d = sum.filter(x => x > 5)
// console.log(d)



const cardData = [
    {
        suit: "heart",           
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];


// function getSuitValues(){
//     const resultObject = {}
//     for(let i = 0;i<cardData.length;i++){
//         const cardDetails = cardData[i]
//         if(cardDetails.suit === "heart"){
//             if(resultObject.heart){
//                 resultObject.heart.push(cardDetails.value)
//             }else{
//                 resultObject.heart = []
//                 resultObject.heart.push(cardDetails.value)
//             }
//         }

//         else if(cardDetails.suit === "club"){
//             if(resultObject.club){
//                 resultObject.club.push(cardDetails.value)
//             }else{
//                 resultObject.club = []
//                 resultObject.club.push(cardDetails.value)
//             }
//         }
//         else{
//                 if(resultObject.diamond){
//                     resultObject.diamond.push(cardDetails.value)
//                 }else{
//                     resultObject.diamond = []
//                     resultObject.diamond.push(cardDetails.value)
//                 }   
//         }
//     }return resultObject
// }
// console.log(getSuitValues())


// function getSuitValues(){
//     const resultObject = {}
//     for(let i = 0;i<cardData.length;i++){
//         const cardDetails = cardData[i]
//         if(cardDetails.suit === "heart"){
//             if(resultObject.heart){
//                 resultObject.heart.push(cardDetails.value)
//             }else{
//                 resultObject.heart = []
//                 resultObject.heart.push(cardDetails.value)
//             }
//         }

//         else if(cardDetails.suit === "club"){
//             if(resultObject.club){
//                 resultObject.club.push(cardDetails.value)
//             }else{
//                 resultObject.club = []
//                 resultObject.club.push(cardDetails.value)
//             }
//         }
//         else{
//                 if(resultObject.diamond){
//                     resultObject.diamond.push(cardDetails.value)
//                 }else{
//                     resultObject.diamond = []
//                     resultObject.diamond.push(cardDetails.value)
//                 }   
//         }
//     }return resultObject
// }
// console.log(getSuitValues())



