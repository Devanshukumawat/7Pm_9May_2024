import "./css/text.css"
import StyleCss from "./css/text.module.css"


function Text() {
    const styleComp = {
        color:"green",
        textAlign:"center"
    }

    return ( 
        <>
            <h1 style={{backgroundColor:"brown",textAlign:"center",color:"white"}} >Text Comp...</h1>

            <p style={styleComp}>Grras Solution</p>

            <h3 className="heading3">Devanshu</h3>

            <h2 className={StyleCss.heading2}>Manny & Kizie</h2>

            <h3 className="text-center text-danger">Text</h3>

        </>
     );
}

export default Text;