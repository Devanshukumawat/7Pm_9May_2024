// const product1 = {
//     name:"I-phone",
//     desc:"Mobile",
//     price:"$678",
//     address:{
//         city:"JAipur",
//         pin_code:78778
//     }
// }

// const { name , desc , price }  = product1

// console.log(desc)

// console.log(product1 )
// console.log("Type :- "+ typeof(product1))

// console.log(product1.address.pin_code)



const product1 = {
    name:"I-phone",
    desc:"Mobile",
    price:"$678",
    address:{
        city:"JAipur",
        pin_code:78778
    },

    allDeatials:function (){
        console.log(`product name :- ${this.name} product price :- ${this.price} product desc :- ${this.desc}`)
    }       
}

product1.allDeatials()

// console.log(product1.address.city)

// const {name,price,desc} = product1

// console.log(name,price,desc)



