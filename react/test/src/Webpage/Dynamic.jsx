import { useParams } from "react-router-dom";

function Dynamic() {
    const dynamiValue = useParams()
    console.log(dynamiValue)
    return ( 
        <>
            <h1>Dynamic Url Comp ....</h1>
        </>
     );
}

export default Dynamic;