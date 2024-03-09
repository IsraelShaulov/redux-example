import axios from 'axios';
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
} from './allActionsType';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersRequest());
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const usersData = response.data;
      dispatch(fetchUsersSuccess(usersData));
    } catch (error) {
      console.log(error.message);
      dispatch(fetchUsersFailure(error));
    }
  };
};
