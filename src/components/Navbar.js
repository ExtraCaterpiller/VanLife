import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link className="navbar--left" to="/">#VANLIFE</Link>
            <nav className="navbar--right">
                <Link className="right--1" to="/about">About</Link>
                <Link className="right--2" to="/vans">Vans</Link>
            </nav>
           
        </div>
    )
}

export default Navbar