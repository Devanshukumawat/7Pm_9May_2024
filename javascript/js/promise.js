// let Mypromise = new Promise((resolve,reject)=>{

// })

// console .log(Mypromise)


// fetch("http://dummy.com/product").then(()=>{}).catch(()=>{}).finally(()=>{})


// let MyPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task completed...!")
//         // resolve({
//         //     name:"Devanshu"
//         // })
//         reject({error:"Error..!"})
//     },2000)
// })

// MyPromise.then((res)=>{
//     console.log("Hello I am a then block")
//     console.log(res)
// })

// MyPromise.catch((error)=>{
//     console.log("Hello i am a catch block")
//     console.log(error)
// })

// // console .log(MyPromise)



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task completed ... !")
//         let task = false
//         if(task){
//             resolve({
//                 userName:"Devanshu",
//                 Password:3456
//             })
//         }else{
//             reject({Error:"Task Error...!"})
//         }
//     },2000)
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Finally Always Run")
// })


// async await


let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task completed ... !")
        let task = false
        if(task){
            resolve({
                userName:"Devanshu",
                Password:3456
            })
        }else{
            reject({Error:"Task Error...!"})
        }
    },2000)
})



async function myFun(){
    try {
        let data = await myPromise
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

myFun()










