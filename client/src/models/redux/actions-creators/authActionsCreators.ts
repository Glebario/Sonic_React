import {authActions} from "../actions/authActions";
import {AuthResponse, AuthState, AuthErrorResponse} from "../../interfaces/authInterfaces";


export function setCurrentUser(authResponse: AuthResponse) {
    return {
        type: authActions.SET_CURRENT_USER,
        authResponse
    };
}

export function updateAuthStore( updateDate: { token: AuthState["token"], user: AuthState["user"] }) {
    return {
        type: authActions.UPDATE_AUTH_STORE,
        updateDate
    };
}

export function getErrorsServer(err: AuthErrorResponse | {}) {
    return {
        type: authActions.GET_ERRORS_FROM_SERVER,
        err
    };
}



