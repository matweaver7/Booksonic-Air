export enum action_type {
    "REQUEST_LOGIN",
    "LOGIN_SUCCESS",
    "LOGOUT",
    "LOGIN_ERROR"
}
export interface authenticationState {
    user: String,
    token: String,
    loading: Boolean,
    errorMessage?: String
}

export interface payload {
    user: String,
    auth_token: String
}

export interface actionError {
    type: action_type.LOGIN_ERROR
    payload: String;
}

export interface actionSuccess {
    type: action_type;
    payload: payload;
}

export type actions = actionError | actionSuccess;

