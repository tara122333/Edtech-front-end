import { combineReducers } from "redux";
// import Auth from './Auth/auth.action'
import User from "./User/user.reducer";

const rootReducer = combineReducers({User});

export default rootReducer;