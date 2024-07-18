import {useState} from "react"

function Test() {

    const [update,setUpdate] = useState("Aman")

    // let firstName = "Devanshu"

    // function updateValue(){
    //     firstName = "Manny"
    //     console.log(firstName)
    // }

    function handleValue(){
        setUpdate("Devanshu")
    }

    return ( 
        <>
            <h1>Test Comp...</h1>
            {/* <h2>{firstName}</h2>
            <button onClick={updateValue}>Update</button> */}
            <h2>{update}</h2>
            <button onClick={handleValue}>Click</button>
        </>
     );
}

export default Test;