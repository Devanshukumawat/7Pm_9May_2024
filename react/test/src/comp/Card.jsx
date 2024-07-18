import CardImage from "./media/cardimg.jpg"

function Card(props) {
    console.log(props)
    // const {firstName} = props.data
    //   const {userData} = props
    // props.userData = "Manny"
    return ( 
        <>
            <div className="main">
                <img src={CardImage} alt="" width={"200px"} className="cardimg"/>
                <h1 className="heading1">{props.data.firstName}</h1>
                <p className="title">Web developer</p>
                <button className="button">More Info</button>
            </div>
        </>
     );
}

export default Card;