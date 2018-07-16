const SIGN_IN = 'SIGN_IN';
const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
import axios from 'axios';
import startMainTab from "../../screen/Maintab";


const requestSinIn = (username, password) => {
    return axios({
        method: 'post',
       headers: {'Content-Type':'application/json'},
       url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCepu-FJTeAvbO2oVMNn5VoUN8am751nXc',
       data: {
           email: username.toString(),
           password: password.toString(),
           returnSecureToken: true
       }
    })
}

const Signin = (username,password) => dispatch => {
     requestSinIn(username, password).then(response => {
    dispatch({
        type: SIGN_IN,
        response
    })
    dispatch(startMainTab())
     }).catch(error=>{
   
      dispatch({
          type: SIGN_IN_ERROR,
          error
      })
    })
    

    
}

export {
    Signin
}