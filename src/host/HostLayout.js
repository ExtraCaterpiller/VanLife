import { NavLink, Outlet } from "react-router-dom"

function HostLayout(){
    return(
        <>
            <nav>
                <NavLink 
                    to="."
                    end
                    className={({isActive}) => isActive ? "my-link" : ""}
                    >Dashboard</NavLink>
                <NavLink 
                    to="income"
                    className={({isActive}) => isActive && "my-link"}
                    >Income</NavLink>
                <NavLink 
                    to="vans"
                    className={({isActive}) => isActive && "my-link"}
                    >Vans</NavLink>
                <NavLink 
                    to="reviews"
                    className={({isActive}) => isActive && "my-link"}
                    >Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout