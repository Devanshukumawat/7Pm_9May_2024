import ChildB from "./ChildB";

function ChildA(props) {
    const {childa} = props
    return ( 
        <>
        <h1>Child-A</h1>
        <ChildB childb={childa} />
        </>
     );
}

export default ChildA;

