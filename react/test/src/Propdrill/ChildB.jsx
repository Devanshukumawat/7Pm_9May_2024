import ChildC from "./ChildC";

function ChildB(props) {
    const {childb} =props
    return ( 
        <>
        <h1>Child-B</h1>
        <ChildC childc={childb}/>
        </>
     );
}

export default ChildB;