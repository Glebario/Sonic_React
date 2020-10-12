import {injectable} from "inversify";
import ILocalStorageRepository from "../models/generalInterfaces/ILocalStorageRepository";
import {IUser} from "../models/AUTH/interfaces/auth-interfaces";


@injectable()
export default class LocalStorageRepository implements ILocalStorageRepository {

    public userData: IUser = JSON.parse(<string>localStorage.getItem('user'))
    public jwtToken: string | null = JSON.parse(<string>localStorage.getItem('jwtToken'))


    addUserData(user: IUser): void {
        if(localStorage.getItem('user')) {
            localStorage.removeItem('user')
        }

        localStorage.setItem('user', JSON.stringify(user));
        this.userData = user;
    }

    addJwtToken(token: string): void {
        localStorage.setItem('jwtToken', JSON.stringify(token));
    }

    removeAllData(): void {
        localStorage.removeItem('user')
        localStorage.removeItem(('jwtToken'))
    }

}
