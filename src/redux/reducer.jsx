
const pincodedata={
    isloading:false,
    iserror:false,
    pincode:''
}

export function CityNameBYPinCode(state=pincodedata,{type,payload}){
    switch (type) {
        case 'loding': return {...state,isloading:true,iserror:false}
            case 'error': return {...state , isloading:false,iserror:true}
            case 'taskdone' : return {...state , isloading:false,iserror:false}
case 'successPincode' : return {...state,isloading:false,iserror:false,pincode:payload}
        default:
            return state;
    }
}

