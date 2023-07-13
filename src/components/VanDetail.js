import React from 'react'
import {useParams} from 'react-router-dom'

function VanDetail(){
    // const params = useParams()
    // It can be writtten like the following with destructuring
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
    
    console.log(vanData)

    return <h4>{vanData.vans.description}</h4>
}

export default VanDetail