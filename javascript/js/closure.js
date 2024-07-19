// function add(){
//     // let a = "Hello"
//     var a = "Devanshu"
// }

// console.log(a)



// function inner(){
//     let firstName = "Devanshu"

//     function outer(){
//         console.log(firstName)
//     }

//     outer()
// }

// inner()



function inner(){
    let firstName = "Devanshu"

    function outer(){
        console.log(firstName)
    }

    return outer
}

console.log(inner())

const outerFun = inner()
outerFun()