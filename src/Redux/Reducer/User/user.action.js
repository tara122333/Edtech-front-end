import axios from "axios";

// Redux types
import { GET_USER } from "./user.type";

export const getMyself = () => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:3000/auth/user/`,
    });

    return dispatch({ type: GET_USER, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

