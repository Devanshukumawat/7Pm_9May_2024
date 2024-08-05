import { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const productId =  useParams()
    // const {id} =productId
    console.log(productId)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId.id}`).then((res)=>{
            return res.json()
         }).then((data)=>{
             console.log(data)
            
           
         })
    },[])

    return ( 
        <>
            <h1>Single Product</h1>
            {/* <h1>Id = {id}</h1> */}
        </>
     );
}

export default SingleProduct;