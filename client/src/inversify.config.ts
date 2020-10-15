import { Container } from "inversify";
import DependencyType from "./inversify.types"
import AuthModel from "./domain/models/AuthModel";
import IAuthModel from "./domain/models/interfaces/IAuthModel";
import UserModel from "./domain/models/UserModel";
import IUserModel from "./domain/models/interfaces/IUserModel";
import LocalStorageRepository from "./domain/repositories/LocalStorageRepository";
import ILocalStorageRepository from "./domain/models/interfaces/ILocalStorageRepository";
import UserRepository from "./domain/repositories/UserRepository";
import IUserRepository from "./domain/models/interfaces/IUserRepository";
import AuthRepository from "./domain/repositories/AuthRepository";
import IAuthRepository from "./domain/models/interfaces/IAuthRepository";


const container = new Container();
container.bind<ILocalStorageRepository>(DependencyType.LocalStorageRepository).to(LocalStorageRepository);
container.bind<IUserRepository>(DependencyType.UserRepository).to(UserRepository);
container.bind<IAuthRepository>(DependencyType.AuthRepository).to(AuthRepository);
container.bind<IAuthModel>(DependencyType.AuthModel).to(AuthModel);
container.bind<IUserModel>(DependencyType.UserModel).to(UserModel);

export default { container };
