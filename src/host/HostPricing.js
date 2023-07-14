import { useOutletContext } from "react-router-dom"

function HostPricing(){
    const {vanData} = useOutletContext()
    return(
        <h1>${vanData.vans.price}/day</h1>
    )
}

export default HostPricing