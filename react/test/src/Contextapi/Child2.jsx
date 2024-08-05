import { useContext } from "react";
import Child3 from "./Child3";
import { data, data1 } from "../App";

function Child2() {
    const userData = useContext(data)
    const secondData = useContext(data1)
    return ( 
        <>
            <h1>Child-2 {userData} {secondData}</h1>
            <Child3/>
        </>
     );
}

export default Child2;