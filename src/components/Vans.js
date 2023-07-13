import React from "react"
import { Link } from "react-router-dom"

function Vans(){
    const [vans, setVans] = React.useState()
    

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    if(!vans){
        return <h2>Loading</h2>
    }
    
    const vanElements = vans.map(van => (
        <div className="list--item" key={van.id}>
            <Link to={`/vans/${van.id}`} >
            <img className="list--image" src={van.imageUrl} alt="" />
            <div className="list--des">
                <h3 className="list--title">{van.name}</h3>
                <p className="list--price">${van.price}<span>/day</span></p>
            </div>
            <i className={`vantype ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))   

    return(
        <>
        <h1>Explore our van options</h1>
        <div className="list">
                {vanElements}
        </div>
        </>
    )
}

export default Vans