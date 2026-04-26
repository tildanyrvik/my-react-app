import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="navlink">Home</Link></li>
                    <li><Link to="/About" className="navlink">About</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;