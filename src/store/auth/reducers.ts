import { AuthState, AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';

function authReducer(state: AuthState = {SIGNED_IN: false, ACCESS_TOKEN:''}, action: AuthActionTypes): AuthState {
    switch(action.type) {
        case SIGN_IN:
            return {
                SIGNED_IN: true,
                ACCESS_TOKEN: action.ACCESS_TOKEN
            }
        case SIGN_OUT:
            return {
                SIGNED_IN: false,
                ACCESS_TOKEN: undefined
            }
        default: return state
    }
}

export { authReducer };