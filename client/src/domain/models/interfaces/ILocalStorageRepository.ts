import { IPostPreview } from './post-interfaces';
import { IUser, TypeLocalStorageUserKeys } from './generic-interfaces';


export default interface ILocalStorageRepository {

  addUserData(user: IUser, typeUser: TypeLocalStorageUserKeys): void

  addUserPosts(posts: IPostPreview[], typeUser: TypeLocalStorageUserKeys): void

  addJwtToken(token: string): void

  removeAllData(): void

  getJWT(): string

  getOwnerUserData(): IUser
  getOtherUserData(): IUser

  getOwnerUserPostsData(): IPostPreview[]
  getOtherUserPostsData(): IPostPreview[]
}
