import { GET_USER} from "./user.type";

const INITIAL_STATE = {
  user: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
      };
      
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;