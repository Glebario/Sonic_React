import { Container } from "inversify";
import { DependencyType } from "./inversify.types"
import AuthModel from "./domain/models/AUTH/AuthModel";
import IAuthModel from "./domain/models/AUTH/interfaces/IAuthModel";
import UserModel from "./domain/models/USER/UserModel";
import IUserModel from "./domain/models/USER/interfaces/IUserModel";
import LocalStorageRepository from "./domain/repositories/LocalStorageRepository";
import ILocalStorageRepository from "./domain/models/generalInterfaces/ILocalStorageRepository";
import UserRepository from "./domain/repositories/USER/UserRepository";
import IUserRepository from "./domain/models/USER/interfaces/IUserRepository";
import AuthRepository from "./domain/repositories/AUTH/AuthRepository";
import IAuthRepository from "./domain/models/AUTH/interfaces/IAuthRepository";


const container = new Container();
container.bind<ILocalStorageRepository>(DependencyType.LocalStorageRepository).to(LocalStorageRepository);
container.bind<IUserRepository>(DependencyType.UserRepository).to(UserRepository);
container.bind<IAuthRepository>(DependencyType.AuthRepository).to(AuthRepository);
container.bind<IAuthModel>(DependencyType.AuthModel).to(AuthModel);
container.bind<IUserModel>(DependencyType.UserModel).to(UserModel);

export default { container };
