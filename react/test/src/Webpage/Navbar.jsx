import NavbarCss from "./navbar.module.css"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
            <div className={NavbarCss.nav}>
                <ul className={NavbarCss.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/data">Product</Link></li>
                </ul>
            </div>
        </>
     );
}

export default Navbar;