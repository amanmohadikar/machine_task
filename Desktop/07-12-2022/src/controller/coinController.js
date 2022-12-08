const coinModel = require("../model/coinModel")
const axios = require("axios")

const getbitCoin = async function (req, res) {
    let obj = {
        headers: {
            Authorization: "Bearer 6eeaca9e-b918-4d16-aae3-01b61091f894"
        }

    }
    let result = await axios("http://api.coincap.io/v2/assets", obj)
    let data1 = result.data.data
    data1 = data1.sort((a, b) => {
        return a.changePercent24Hr - b.changePercent24Hr
    })
    let arr = []
    for (let i = 0; i < data1.length; i++) {
        let name = data1[i].name
        let symbol = data1[i].symbol

        let isUnique = await coinModel.findOne({ name: name, symbol: symbol })
        if (!isUnique) {
            arr.push(data1[i])
        }
    }
    await coinModel.insertMany(arr)
    return res.send({ message: data1 })


}




module.exports.getbitCoin = getbitCoin













// const getbitCoin = async function(req,res){

//     let options ={
//         headers: {Authorization: "Bearer XXXXXXXXXX"},
//         method :"get",
//         url :`http://api.coincap.io/v2/assets`
//     }
//     let result = await axios(options)
//     let data1=result.data.data
//     data1=data1.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr})
//     let arr=[]
//     await coinModel.deleteMany({})
//     for(let a=0;a<data1.length;a++){
//         let x=data1[a].name
//         let y=data1[a].symbol
//         var unisy= await coinModel.findOne({name:x,symbol:y})
//         if(!unisy)
//         {
//             arr.push(data1[a])
//         }
//     }
//     await coinModel.insertMany(arr)
//     res.status(200).send({status:true,data:data1})

// }
