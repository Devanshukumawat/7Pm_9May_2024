// JavaScript if, else, and else if
//Conditional Statements
//You want to perform different actions for different decisions.

const prompt = require ("prompt-sync")()

// let age = "dfghjk"

// if(age>18){
//     console.log("You Are eligible for vote")  // 67 >18 = true // 16>18 = false
// }
// else if(age<18){
//     console.log("You are not eligible for vote") // 16<18 = true 
// }else{
//     console.log("Invalid input")
// }

// Check if a number is odd or even

// let num = prompt("Enter Number :- ")

// if(num%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// npm 
// npm init = package.json
// npm install/i prompt-sync = package-lock.json node_modules
// require()

//->Let create simple calculator
//Addition 
//Subtraction
//Multiplication
//sDivisions


// prompt
// num1 = 6
// num2 = 7
// operator = + / - *
// print = 13

const num1 = parseInt(prompt("Enter First Number :- "))
const num2 = parseInt(prompt("Enter Second Number :- "))
const operator = prompt("Enter Operator(+,/,-,*) :- ")

let result;

if(operator == "+"){
    result = num1+num2
}
else if(operator == "-"){
    result = num1-num2
}
else if(operator == "/"){
    result = num1/num2
}
else if(operator == "*"){
    result = num1*num2
}
else{
    console.log("Invalid Input")
}

console.log(num1 + operator + num2 + " = "+ result)


/*

user input = ""
Devanshu = Dev
Dev = Devanshu
Kizie = Manny
Mannny = Kizie


Loan Prediction

 job _type (input)    
        government / business / private
        if job_type government
            take salary input and if salary is greater than 50k
                print You can apply for loan
                otherwise print you can not apply for loan
        if job_type business than
            yearly turnover input 
            if turnover greater than 20lakh than
                print you can apply for loan
            other wise 
                print you can not apply for loan
        if job_type private
            no loan available for you

        Find the largest of two number


*/
