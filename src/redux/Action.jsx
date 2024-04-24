import axios from "axios"


export function LoadingData(){
    return {type:'loading'}
}
export function ErrorData(){
    return {type:'error'}
}
export function TaskDone(){
    return {type:'taskdone'}
}

export const GettingPinCode=(text)=>async(dispatch)=>{
    dispatch(LoadingData())
try {
    let res=await axios.get(`https://nominatim.openstreetmap.org/search?postalcode=${text}&countrycodes=IN&format=json&addressdetails=1&limit=1`)
    let gettingpin=res.data
    dispatch({type:'successPincode',payload:gettingpin})
} catch (error) {
    dispatch(ErrorData())
}
}

