import React, { useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";
import { action, authenticationState } from "./types";


const AuthStateContext = React.createContext<{
    state: authenticationState,
}>({
    state: initialState,
});
const AuthDispatchContext = React.createContext<{
    dispatch: React.Dispatch<action>;
}>({
    dispatch: () => undefined,
});


export const useAuthState = () => {
    const context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return context;
}

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={{state}}>
            <AuthDispatchContext.Provider value={{dispatch}}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}
