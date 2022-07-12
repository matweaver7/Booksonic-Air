export enum action_type {
    "REQUEST_LOGIN",
    "LOGIN_SUCCESS",
    "LOGOUT",
    "LOGIN_ERROR"
}
export interface authenticationState {
    user: String,
    isAuthenticated: Boolean,
    loading: Boolean,
    errorMessage: String
}

export interface action {
    type: action_type
    payload: String
}

export type actions = action;

