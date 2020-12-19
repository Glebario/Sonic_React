import { inject, injectable } from 'inversify';
import { observable } from 'mobx';
import DependencyType from '../../inversify.types';
import IAuthRepository from './interfaces/IAuthRepository';
import { IPostRepository } from './interfaces/IPostRepository';
import IUserModel from './interfaces/IUserModel';
import ILocalStorageRepository from './interfaces/ILocalStorageRepository';
import IPostModel from './interfaces/IPostModel';

@injectable()
export default class PostModel implements IPostModel {
  public constructor(
    @inject(DependencyType.AuthRepository) private readonly authRepository: IAuthRepository,
    @inject(DependencyType.PostRepository) private readonly postRepository: IPostRepository,
    @inject(DependencyType.UserModel) private userModel: IUserModel,
    @inject(DependencyType.LocalStorageRepository) private readonly localStorageRepository: ILocalStorageRepository,
  ) {}

  @observable
  public loadingLogo: boolean = false;

}
