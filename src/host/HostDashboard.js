import { useOutletContext } from "react-router-dom"

function HostDashboard(){
    const {vanData} = useOutletContext()
    console.log(vanData)
    return(
        <>
            <h2>Name: {vanData.vans.name}</h2>
            <h4>Category: {vanData.vans.type}</h4>
            <h4>Description: {vanData.vans.description}</h4>
            <h4>Visibility: public</h4>
        </>
        
    )
}

export default HostDashboard