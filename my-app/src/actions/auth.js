import jwt from 'jsonwebtoken'


export const  loginUser = (email,password) =>{
  //verify email and password
  // create and sign a jwt

  if (email === 'admin@mail.com' && password === "password"){
    const token = jwt.sign({email},'SECRET')
    return {token}
    
  } else {
    return { token : null}
  }
}