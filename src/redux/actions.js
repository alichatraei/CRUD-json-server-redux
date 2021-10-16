import * as type from "./actionTypes";
import axios from "axios";
const getUsers = (users) => ({ type: type.getUsers, payload: users });
const deletedUser = () => ({ type: type.deleteUser });
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
export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/${id}`);
      dispatch(deletedUser());
      dispatch(getUsers());
    } catch (error) {
      console.error(error);
    }
  };
};
