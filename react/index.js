// function add(a,b){
//     console.log(a+b)
// }


// add(8,9)


const obj = {
    Name:"Devanshu",
    Age:56,
    Address:{
        city:"JAipur",
        pincode:"6789"
    }
}

// const {Name,Age} = obj

// console.log(Name,Age)

const {city,pincode} = obj.Address

console.log(city,pincode)