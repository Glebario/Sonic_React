import { IPostPreview } from './post-interfaces';
import { IUser } from './generic-interfaces';

export default interface IUserModel {
  ownerUser: IUser
  otherUser: IUser
  ownerUserPosts: IPostPreview[]
  otherUserPosts: IPostPreview[]
  loadingLogo: boolean
  switchUser: boolean

  checkUser(value: any): void

}
