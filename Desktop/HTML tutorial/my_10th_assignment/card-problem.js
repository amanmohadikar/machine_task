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



// =========================================== 1 ==================================================== //

// function findcard(){
//     for(let i = 0;i<cardData.length;i++){
//         const final = cardData[i]
//         if(final.suit === "heart"){
//             if(final.value === 5){

//                 return true;
              
//             } else{
//                 return false;
               
//             }
//     }      
//  }
// }
// console.log(findcard());


function findCard(value, suit){
    for(let i = 0;i<cardData.length;i++){
        const cardDetail = cardData[i];
        if(cardDetail.value === value && cardDetail.suit === suit){
            return true
        }
    }return false
}
console.log(findCard(6,"club"))







/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //




/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// function getSuits(){
//     (cardData.forEach((x) => {
//         console.log(x.suit)
//     }))}
    
// getSuits();




  


   