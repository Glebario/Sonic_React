import {observable} from "mobx";
import {inject, injectable} from "inversify";

import IUserModel from "./interfaces/IUserModel";
import IUserRepository from "./interfaces/IUserRepository";
import ILocalStorageRepository from "./interfaces/ILocalStorageRepository";
import {IUser} from "./interfaces/auth-interfaces";
import DependencyType from "../../inversify.types";



@injectable()
export default class UserModel implements IUserModel {

    constructor(
        @inject(DependencyType.UserRepository) private readonly userRepository: IUserRepository,
        @inject(DependencyType.LocalStorageRepository) private readonly localStorageRepository: ILocalStorageRepository
    ) {}

    @observable
    public user: IUser = this.localStorageRepository.userData


}
