import { useOutletContext } from "react-router-dom"

function HostPhotos(){
    const {vanData} = useOutletContext()
    return(
        <>
        <img src={vanData.vans.imageUrl} alt="" />
        </>
    )
}

export default HostPhotos