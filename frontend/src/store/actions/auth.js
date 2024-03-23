import axios from "axios";
import * as actionTypes from "./actionTypes";
import { loginURL, signupURL } from "../../constants";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(loginURL, {
        username,
        password
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        /* check if undefined */
        if (typeof err.response !== undefined) {/*                               
          With this notation, you’ll never run into Cannot read property ‘.property' of undefined. 
          You basically check if object exists,if not, you create an empty object on the fly. 
          This way, the next level key will always be accessed from an object that 
          exists or an empty object, but never from undefined. */}
        dispatch(authFail((err.response.data || {}).non_field_errors[0]))
      })
  };
};

export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post(signupURL, {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        /* check if undefined */
        if (typeof err.response !== undefined) {/*                               
          With this notation, you’ll never run into Cannot read property ‘.property' of undefined. 
          You basically check if object exists,if not, you create an empty object on the fly. 
          This way, the next level key will always be accessed from an object that 
          exists or an empty object, but never from undefined. */}
        dispatch(authFail((err.response.data || {}).non_field_errors[0]))
      })
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};