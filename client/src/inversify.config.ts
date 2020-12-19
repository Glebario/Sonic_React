import { Container } from 'inversify';
import DependencyType from './inversify.types';
import AuthModel from './domain/models/AuthModel';
import IAuthModel from './domain/models/interfaces/IAuthModel';
import UserModel from './domain/models/UserModel';
import IUserModel from './domain/models/interfaces/IUserModel';
import LocalStorageRepository from './domain/repositories/LocalStorageRepository';
import ILocalStorageRepository from './domain/models/interfaces/ILocalStorageRepository';
import UserRepository from './domain/repositories/UserRepository';
import IUserRepository from './domain/models/interfaces/IUserRepository';
import AuthRepository from './domain/repositories/AuthRepository';
import IAuthRepository from './domain/models/interfaces/IAuthRepository';
import PostRepository from './domain/repositories/PostRepositor';
import IPostRepository from './domain/models/interfaces/IPostRepository';
import PostModel from './domain/models/PostModel';
import IPostModel from './domain/models/interfaces/IPostModel';

const container = new Container();
container.bind<ILocalStorageRepository>(DependencyType.LocalStorageRepository).to(LocalStorageRepository);
container.bind<IUserRepository>(DependencyType.UserRepository).to(UserRepository);
container.bind<IPostRepository>(DependencyType.PostRepository).to(PostRepository);
container.bind<IAuthRepository>(DependencyType.AuthRepository).to(AuthRepository);
container.bind<IAuthModel>(DependencyType.AuthModel).to(AuthModel);
container.bind<IUserModel>(DependencyType.UserModel).to(UserModel);
container.bind<IPostModel>(DependencyType.PostModel).to(PostModel);

export default { container };
