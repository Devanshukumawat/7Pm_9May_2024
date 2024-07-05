// // const allDetails =function (address){
// //     console.log("FirstName :- "+this.firstName + " LastName :- "+this.lastName + " Address:- "+address)
// // }

// // const obj = {
// //     firstName:"Devanshu",
// //     lastName:"Kumawat",
// // }

// // const obj1 = {
// //     firstName:"Aman",
// //     lastName:"Sharma",
// // }


// // allDetails.call(obj,"ajmer")
// // allDetails.call(obj1,"jaipur")

// // obj.allDetails()

// // obj.allDetails.call(obj1)




// // const allDetails =function (address){
// //     console.log("FirstName :- "+this.firstName + " LastName :- "+this.lastName + " Address:- "+address)
// // }
// // const obj = {
// //     firstName:"Devanshu",
// //     lastName:"Kumawat",
// // }
// // const obj1 = {
// //     firstName:"Aman",
// //     lastName:"Sharma",
// // }

// // allDetails.apply(obj,["jaipur"])
// // allDetails.apply(obj1,["Ajmer"])



// const allDetails =function (address){
//     console.log("FirstName :- "+this.firstName + " LastName :- "+this.lastName + " Address:- "+address)
// }
// const obj = {
//     firstName:"Devanshu",
//     lastName:"Kumawat",
// }
// const obj1 = {
//     firstName:"Aman",
//     lastName:"Sharma",
// }

// // console.log(allDetails.bind(obj,"jaipur"))
// const detailFun = allDetails.bind(obj,"Jaipur")
// const detailFun1 = allDetails.bind(obj1,"AJMER")
// detailFun()
// detailFun1()


// const obj = {
//     product:"I-phone",
//     Price:"$567",
//     Rating:4.8
// }

// console.log(JSON.stringify(obj))


// const obj = {
//     "product":"I-phone",
//     "Price":"$567",
//     "Rating":4.8
// }

// console.log(JSON.parse(obj))