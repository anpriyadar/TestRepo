const REGISTER_USER = 'REGISTER_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';

import axios from 'axios';


const callRegisterUserAPI = (email, password) => {
   return axios({
       method: 'post',
       headers: {'Content-Type':'application/json'},
       url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCepu-FJTeAvbO2oVMNn5VoUN8am751nXc',
       data: {
           email: email.toString(), 
           password: password.toString(),
           returnSecureToken: true
       }
   })
}

const registerUser = (email,password) => dispatch => {
    callRegisterUserAPI(email, password).then((response) => {
        dispatch({
            type: REGISTER_USER,
            response
        })

    }).catch(err => {
      dispatch({
          type: REGISTER_ERROR,
          err
      })
    });
    
}

export {
  registerUser
}