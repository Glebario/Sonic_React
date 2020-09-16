import axios, {AxiosResponse, AxiosError} from "axios";
import {AuthResponse, AuthErrorResponse, UserLogin, UserRegister} from "../models/interfaces/authInterfaces";
import * as LocalStorage from "./LocalStoradeServices";
import {getErrorsServer, setCurrentUser} from "../models/redux/actions-creators/authActionsCreators";


// ===========================Добовление пользователя в базу данных (DATA BASE) ================
export function registration(user: UserRegister) {
    return (dispatch: any) => {
        return axios.post('/api/auth/register', user)
            .then(
                () => {
                    dispatch(getErrorsServer({}));
                },
            )
            .catch(
                (err: AxiosError<AuthErrorResponse>) => {
                    //console.log(err.response);
                    dispatch(getErrorsServer(err.response?.data ? err.response?.data : {}));
                }
            );
    }
}


// ===========================Авторизация пользователя в FIREBASE Authorization ================
export function login(user: UserLogin) {
    return (dispatch: any) => {
        return axios.post('/api/auth/login', user)
            .then(
                (response: AxiosResponse<AuthResponse>) => {
                    //console.log(response);
                    dispatch(setCurrentUser(response.data));
                    dispatch(getErrorsServer({}));
                    LocalStorage.jwtToken(response.data.token);
                    LocalStorage.localStorageUser(response.data.userResponse);
                },
            )
            .catch(
                (err: AxiosError<AuthErrorResponse>) => {
                    //console.log(err.response);
                    dispatch(getErrorsServer(err.response?.data ? err.response?.data : {}));
                }
            );
    }
}


