import { data , data1 } from "../App";


function Child3() {
    return ( 
        <>
            <data.Consumer>
                {
                    (userData)=>{
                        return(
                            <data1.Consumer>
                                {
                                    (secondData)=>{
                                        return(
                                            <>
                                                <h1>Child3 {userData} {secondData}</h1>
                                            </>
                                        )
                                    }
                                }
                            </data1.Consumer>
                        )
                    }
                }
            </data.Consumer>
            
        </>
     );
}

export default Child3;