import {IUser} from "../AUTH/interfaces/auth-interfaces";

export default interface ILocalStorageRepository {
    userData: IUser
    jwtToken: any

    addUserData(user: IUser): void

    addJwtToken(token: string): void

    removeAllData(): void
}
