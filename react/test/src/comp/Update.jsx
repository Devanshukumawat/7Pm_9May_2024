import { useState } from "react";

function Update() {

    let value = {first:"Hello",second:"Class"}

    const [update,setUpdate] = useState(value)

    function handleUpdate(){
        // spread operator ...update
        setUpdate({...update,first:"Hy"})
    }

    return ( 
        <>
            <h1>Update</h1>
            <h2>{update.first} {update.second}</h2>
            <button onClick={handleUpdate}>Update</button>
        </>
     );
}

export default Update;