const REGISTER_USER = 'REGISTER_USER';
const REGISTER_ERROR = 'REGISTER_ERROR';


import {
    initialState
} from '../initialState';

export default (state = initialState,action)=>{

    switch (action.type) {

        case REGISTER_USER:
            return Object.assign({}, {
                registerUserResponse: action.response, registerationSucess: true, registerationError: false
            })
            case REGISTER_ERROR:
                return Object.assign({}, {
                    registerUserResponse: action.err,
                    registerationSucess: false,
                    registerationError: true
                })
        default:
            return state
    }
}


