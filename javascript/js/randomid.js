//Code to generate random id/OTP unique every time.

let str = "abcdefghikklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

function uniqueId(length){

    let randomId = ""
    
    for(let i=1; i<=length; i++){
       let randomNum = Math.floor(Math.random()*str.length)
       let randomStr = str.charAt(randomNum)
       randomId = randomId + randomStr
    }
    

    console .log(randomId)
  

}
uniqueId(7)
