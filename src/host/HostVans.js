import React from "react"
import { Link } from "react-router-dom"

function HostVans(){
    const [vans, setVans] = React.useState()

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    if(!vans){
        return <h1>Loading</h1>
    }

    const ff = vans.filter((obj) => obj.hostId === "123")
    console.log(ff)
    return (
        <>
            <h1>Your listed vans</h1>
            {ff.map(curr => {
                return(
                    <>
                        <Link key={curr.id} to={`/host/vans/${curr.id}`}>
                            <img src={curr.imageUrl} alt="" />
                            {curr.name}
                            <p>${curr.price}/day</p>
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default HostVans