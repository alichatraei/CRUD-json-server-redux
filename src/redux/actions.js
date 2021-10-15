import * as type from "./actionTypes";
import axios from "axios";
const getUsers = (users) => ({ type: type.getUsers, payload: users });

export const getUsersDispatch = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}`);
      dispatch(getUsers(data));
    } catch (error) {
      console.error(error);
    }
  };
};
