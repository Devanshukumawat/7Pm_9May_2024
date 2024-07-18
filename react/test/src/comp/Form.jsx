import { useState } from "react";

function Form() {


    function handleForm(e){
        e.preventDefault()
        console.log({Username:userName,Password:pass})
        setUser(userName)
    }

    const [userName,setUsername] = useState("")
    const [pass,setPass] = useState("")
    const [user,setUser] = useState("")

    function handleuserName(e){
        setUsername(e.target.value)
       
    }

    function handlePass(e){
        setPass(e.target.value)
    }

    return ( 
        <>

        <div style={{
            width:"100%",
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
            <div style={{
                width:"300px",
                height:"400px",

            }}>
                {/* Ternary operator */}
                <h1>Hello  {user===""?"Form":user}</h1>
                <form onSubmit={handleForm}>
                    <label>Username</label>
                    <input type="text" className="form-control"
                        value={userName}
                        onChange={handleuserName}
                    />
                    <label>Password</label>
                    <input type="text" className="form-control"
                        value={pass}
                        onChange={handlePass}
                    />
                    <button type="submit" className="form-control btn btn-success mt-2">Submit</button>
                </form>
            </div>
        </div>    
        </>
     );
}

export default Form;