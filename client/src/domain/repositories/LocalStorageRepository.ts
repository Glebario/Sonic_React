import { injectable } from 'inversify';
import ILocalStorageRepository from '../models/interfaces/ILocalStorageRepository';
import { IPostPreview } from '../models/interfaces/post-interfaces';
import {
  LocalStorageKeys,
  TypeLocalStorageKeys,
  IUser,
  TypeLocalStorageUserKeys,
} from '../models/interfaces/generic-interfaces';

@injectable()
export default class LocalStorageRepository implements ILocalStorageRepository {
  private localStorageAssistant = {
    set(key: TypeLocalStorageKeys, value: IUser | IPostPreview[] | string) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
      try {
        return JSON.parse(<string>window.localStorage.getItem(key));
      } catch (e) {
        return null;
      }
    },
  };

  public addUserData = (user: IUser, typeUser: TypeLocalStorageUserKeys): void => {
    if (typeUser === LocalStorageKeys.ownerUser) {
      this.localStorageAssistant.set(LocalStorageKeys.ownerUser, user);
    }
    if (typeUser === LocalStorageKeys.otherUser) {
      this.localStorageAssistant.set(LocalStorageKeys.otherUser, user);
    }
  };

  public addUserPosts = (posts: IPostPreview[], typeUser: TypeLocalStorageUserKeys): void => {
    if (typeUser === LocalStorageKeys.ownerUser) {
      this.localStorageAssistant.set(LocalStorageKeys.ownerUserPosts, posts);
    }
    if (typeUser === LocalStorageKeys.otherUser) {
      this.localStorageAssistant.set(LocalStorageKeys.otherUserPosts, posts);
    }
  };

  public addJwtToken = (token: string): void => {
    this.localStorageAssistant.set(LocalStorageKeys.jwtToken, token);
  };

  public removeAllData = (): void => {
    localStorage.clear();
  };

  public getJWT = (): string => this.localStorageAssistant.get(LocalStorageKeys.jwtToken);

  public getOwnerUserData = (): IUser => this.localStorageAssistant.get(LocalStorageKeys.ownerUser);

  public getOtherUserData = (): IUser => this.localStorageAssistant.get(LocalStorageKeys.otherUser);

  public getOwnerUserPostsData = (): IPostPreview[] => this.localStorageAssistant.get(LocalStorageKeys.ownerUserPosts);

  public getOtherUserPostsData = (): IPostPreview[] => this.localStorageAssistant.get(LocalStorageKeys.otherUserPosts);
}
