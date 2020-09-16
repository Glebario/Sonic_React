import {history} from "../../../index"
import {authActionsType} from "../../interfaces/ActionsType";
import {authActions} from "../actions/authActions";
import {AuthState} from "../../interfaces/authInterfaces";
import {sharedActions} from "../actions/sharedActions";


const initialState: AuthState = {
    isAuthenticated: false,
    token: '',
    user: {},
    err: {}
}

export default (state = initialState, action: authActionsType) => {
    //console.log(action)
    switch(action.type) {
        case authActions.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                token: action.authResponse.token,
                user: action.authResponse.userResponse
            };
        case authActions.GET_ERRORS_FROM_SERVER:
            return {
                ...state,
                err: action.err
            }
        case authActions.UPDATE_AUTH_STORE:
            return {
                ...state,
                isAuthenticated: true,
                ...action.updateDate
            }
        case sharedActions.DEFAULT_STATE:
            history.push("/sign-in")
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }



        default:
            return state;
    }
}
