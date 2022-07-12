import React from "react";
import {actions, authenticationState, action_type} from "./types";

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") || "").user
    : "";
let token = document.cookie.replace(/(?:(?:^|.*;\s*)JSESSIONID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
   
export const initialState: authenticationState = {
    user: "" || user,
    isAuthenticated:  token ? true : false,
    loading: false,
    errorMessage: ''
};


export const AuthReducer = (initialState: authenticationState, action: actions): authenticationState => {
    switch (action.type) {
      case action_type.REQUEST_LOGIN:
        return {
          ...initialState,
          loading: true
        };
      case action_type.LOGIN_SUCCESS:
        return {
          ...initialState,
          user: action.payload,
          isAuthenticated: true,
          loading: false
        };
      case action_type.LOGOUT:
        return {
          ...initialState,
          user: "",
          isAuthenticated: false
        };
   
      case action_type.LOGIN_ERROR:
        return {
          ...initialState,
          loading: false,
          isAuthenticated: false,
          errorMessage: action.payload
        };
   
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };