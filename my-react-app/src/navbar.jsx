import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="navlink">Home</Link></li>
                    <li><Link to="/Portfolio" className="navlink">Portfolio</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;