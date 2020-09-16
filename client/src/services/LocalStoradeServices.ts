import {user} from "../models/interfaces/totalInterfaces";

let userData: user = localStorage.getItem('user') ? JSON.parse(<string>localStorage.getItem('user')) : null;

//======================================МОЙ АККАУНТ=====================================
export const localStorageUser = (dataUserFromServer: user) => {
    if(localStorage.getItem('user')) {
        localStorage.removeItem('user')
    }

    localStorage.setItem('user', JSON.stringify(dataUserFromServer));
    userData = dataUserFromServer;
}

export const jwtToken = (token: string) => {
    localStorage.setItem('jwtToken', JSON.stringify(token));
}
