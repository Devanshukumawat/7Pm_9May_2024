import { useState } from "react";

function Counter() {

    const [count,setCount] = useState(0)

    function handleIncrement(){
        setCount(count+1)
    }

    function handleDecrement(){
        if(count){
            setCount(count-1)
        }
        
    }

    return ( 
        <>
            <h1>Counter Application</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h2>{count}</h2>
            <button onClick={handleDecrement}>Decrement</button>
        </>
     );
}

export default Counter;