// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function UseEffect() {

//     const [increment,setIncrement] = useState(0)
//     const [value,setValue] = useState("Manny")

//     useEffect(()=>{
//         console.log("Comp...Render...!")
//     },[value])

//     function handleIncrement(){
//         setIncrement(increment+1)
//     }

//     function handleUpdate(){
//         setValue("Kizie")
//     }

//     return ( 
//         <>
//             <h1>UseEffect Hook</h1>
//             <h1>{increment}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <h2>{value}</h2>
//             <button onClick={handleUpdate}>Update</button>
//         </>
//      );
// }

// export default UseEffect;


// function UseEffect() {

//     const [value,setValue] = useState(1)
//     const [title,setTitle] = useState("")
//     const [img,setImg] = useState("")

//     useEffect(()=>{
//         fetch(`https://dummyjson.com/products/${value}`).then((res)=>{
//             return res.json()
//          }).then((data)=>{
//              console.log(data)
//              setTitle(data.title)
//              setImg(data.images[0])
//          })
//     },[value])
    

//     return ( 
//         <>
//             <h1>UseEffect Hook</h1>
//             <h1>{title}</h1>
//             <img src={img} alt="" width={"200px"}/>
//             <h1>{value}</h1>
//             <button onClick={()=>{setValue(value+1)}}>Increment</button>
//         </>
//      );
// }

// export default UseEffect;


function UseEffect() {

    const [value,setValue] = useState([])
   

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/`).then((res)=>{
            return res.json()
         }).then((data)=>{
             console.log(data)
             setValue(data.products)
           
         })
    },[])
    

    return ( 
        <>
            <h1>UseEffect Hook</h1>

            <div style={{
                display:"flex",
                flexWrap:"wrap",
                gap:"20px",
                border:"2px solid red"
            }}>

                {
                    value.map((value,index)=>(
                        <>
                        <Link to={`/single/${value.id}`}>
                        <div style={{
                            border:"2px solid green"
                        }}>
                            <h1>{value.title}</h1>
                            <img src={value.images[0]} alt="" width={"100px"}/>
                            </div>  
                            </Link>      
                        </>
                        

                    ))
                }

            </div>
            
        </>
     );
}

export default UseEffect;