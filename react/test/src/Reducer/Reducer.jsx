import { useReducer } from "react";

function Reducer() {

    const initialState = {
        count:0,
        Name:"Devanshu Sir 💕"
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(currentState,actions){
        switch(actions){
            case "Increment":
                return {...currentState,count:currentState.count+1}
            
            case "Decrement":
                return {...currentState,count:currentState.count-1}    

            case "Update":
                return {...currentState,Name:currentState.Name="Manny 😍"}

            default:
                return {...currentState,count:currentState.count}    
        }
    }

    return ( 
        <>
            <h1>Reducer hook..😍 {state.count}</h1>
            <button onClick={()=>{dispatch("Increment")}}>Increment</button>
            <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>


            <h1>Name:- {state.Name} </h1>
            <button onClick={()=>{dispatch("Update")}}>Update Name</button>

        </>
     );
}

export default Reducer;