import { SIGN_UP } from "./auth.type";

const INITIAL_STATE = {};

const AuthReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
            };
        
        default:
            return {
                ...state
            };
    }
}

export default AuthReducer;