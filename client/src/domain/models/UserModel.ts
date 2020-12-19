import { action, observable } from 'mobx';
import { inject, injectable } from 'inversify';
// import history from '../../history';
import IUserModel from './interfaces/IUserModel';
import IUserRepository from './interfaces/IUserRepository';
import ILocalStorageRepository from './interfaces/ILocalStorageRepository';
import DependencyType from '../../inversify.types';
import { IUser, LocalStorageKeys } from './interfaces/generic-interfaces';
import { IPostPreview } from './interfaces/post-interfaces';

@injectable()
export default class UserModel implements IUserModel {
  constructor(
    @inject(DependencyType.UserRepository)
    private readonly userRepository: IUserRepository,

    @inject(DependencyType.LocalStorageRepository)
    private readonly localStorageRepository: ILocalStorageRepository,
  ) {}

  @observable
  public ownerUser: IUser = this.localStorageRepository.getOwnerUserData();

  @observable
  public otherUser: IUser;

  @observable
  public ownerUserPosts: IPostPreview[];

  @observable
  public otherUserPosts: IPostPreview[];

  @observable
  public loadingLogo: boolean = false;

  @observable
  public switchUser: boolean = false;

  @action
  public checkUser = (pathParams: { userId: string }) => {
    // this.loadingLogo = true;
    this.userRepository.getUser(pathParams.userId)
      .then((response) => {
        if (this.ownerUser.localId !== response.successResult.user.localId) {
          // this.otherUser = this.localStorageRepository.getOtherUserData();
          // this.otherUserPosts = this.localStorageRepository.getOtherUserPostsData();
          this.switchUser = true;
          this.otherUser = response.successResult.user;
          this.otherUserPosts = response.successResult.postsPreview;
          this.localStorageRepository.addUserData(response.successResult.user, LocalStorageKeys.otherUser);
          this.localStorageRepository.addUserPosts(response.successResult.postsPreview, LocalStorageKeys.otherUser);
        } else {
          // this.ownerUser = this.localStorageRepository.getOwnerUserData();
          // this.ownerUserPosts = this.localStorageRepository.getOwnerUserPostsData();
          this.switchUser = false;
          this.ownerUser = response.successResult.user;
          this.ownerUserPosts = response.successResult.postsPreview;
          this.localStorageRepository.addUserData(response.successResult.user, LocalStorageKeys.ownerUser);
          this.localStorageRepository.addUserPosts(response.successResult.postsPreview, LocalStorageKeys.ownerUser);
        }
        // this.loadingLogo = false;
      });
  };
}
