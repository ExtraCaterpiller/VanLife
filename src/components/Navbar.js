import { Link,NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <Link className="navbar--left" to="/">#VANLIFE</Link>
            <nav className="navbar--right">
                <NavLink 
                    className={({isActive}) => isActive ? "my-link right--1" : "right--1"}
                    to="/host"
                    >Host</NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "my-link right--2" : "right--2"}
                    to="/about"
                    >About</NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "my-link right--3" : "right--3"}
                    to="/vans"
                    >Vans</NavLink>
            </nav>
        </div>
    )
}

export default Navbar