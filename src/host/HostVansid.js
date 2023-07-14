import React from "react"
import { useParams, Outlet, Link } from "react-router-dom"

function HostVansid(){
    const {id} = useParams()
    const [vanData, setVanData] = React.useState()

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanData(data))
    }, [id])

    if(!vanData){
        return <h1>Loading</h1>
    }

    return(
        <>
            <Link to="../vans">&larr;Back to all vans</Link>
            <h1>HostVansid</h1>
            <div>
                {console.log(vanData)}
                <img src={vanData.vans.imageUrl} alt="" />
                {vanData.vans.name}
                <p>${vanData.vans.price}/day</p>
                <nav>
                    <Link to=".">Overview</Link>
                    <Link to="pricing">Pricing</Link>
                    <Link to="photos">Photos</Link>
                </nav>
                <Outlet context={{ vanData }}/>
            </div>
        </>
    )
}

export default HostVansid