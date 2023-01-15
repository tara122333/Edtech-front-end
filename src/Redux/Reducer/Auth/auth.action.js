import axios from 'axios';

// Redux Type
import { SIGN_UP } from './auth.type';


export const signUp = (userData) => async(dispatch)=>{
    try {
        const User = await axios({
            method: "POST",
            url: 'http://localhost:4000/auth/signup',
            data: { credentials: userData },
          });

          return dispatch({ type: SIGN_UP, payload: User.data });

    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}