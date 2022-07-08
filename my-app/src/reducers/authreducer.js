const initialstate = {
  token : null
}

const authreducer = (state= initialstate,action) => {

const {type,payload} = action 

switch(type) {
  case "LOGIN_SUCCESS":
    return {...payload}

    case "LOGIN_FAILED":
    return {...payload}

  default:
     return state
}



}


export default authreducer