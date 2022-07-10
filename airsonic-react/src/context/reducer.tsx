import React from "react";
import {actions, authenticationState, action_type} from "./types";

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") || "").user
    : "";
let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") || "").auth_token
    : "";
   
export const initialState: authenticationState = {
    user: "" || user,
    token: "" || token,
    loading: false,
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
          user: action.payload.user,
          token: action.payload.auth_token,
          loading: false
        };
      case action_type.LOGOUT:
        return {
          ...initialState,
          user: "",
          token: ""
        };
   
      case action_type.LOGIN_ERROR:
        return {
          ...initialState,
          loading: false,
          errorMessage: action.payload
        };
   
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };