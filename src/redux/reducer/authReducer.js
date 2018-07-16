const SIGN_IN = 'SIGN_IN';
const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

import {
    initialState
} from '../initialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, {
                LognResponse: action.response, isSignInSucess:true
            })
        case SIGN_IN_ERROR:
            return Object.assign({}, {
                LognResponse: action.error, isSignInSucess:false
            })
        default:
            return state
    }
}
