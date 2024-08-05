// import { useEffect, useState } from "react";

import { useRef } from "react";

// function Hooks() {

//     const [value,setValue] = useState(0)
//     const [name,setName] = useState("manny")

//     useEffect(()=>{
//         console.log("UseEffect Fun Comp... Render...!")
//     },[name])

//     return ( 
//         <>
//             <h1>UseEffect</h1>
//             <h2>{value}</h2>
//             <button onClick={()=>{setValue(value+1)}}>+</button>
//             <h1>{name}</h1>
//             <button onClick={()=>{setName("Dev")}}>Update</button>
//         </>
//      );
// }

// export default Hooks;


function Hooks() {

    const refHook = useRef("")
    console.log(refHook.current.style)

    function handleColor(){
        refHook.current.style.color = "red"
        refHook.current.style.backgroundColor = "yellow"

    }

    return ( 
        <>
            <h1>UseRef hook</h1>

            <button ref={refHook}  onClick={handleColor}>Color</button>

        </>
     );
}

export default Hooks;