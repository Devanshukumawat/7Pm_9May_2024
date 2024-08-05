import { memo } from "react";

function Call(props) {

    console.log(props)

    console.log("Call Comp...🫤")

    return ( 
        <>
            <h1>Learn Callback Hook</h1>
        </>
     );
}

export default memo(Call);