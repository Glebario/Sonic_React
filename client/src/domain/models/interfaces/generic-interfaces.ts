import { IPostPreview } from './post-interfaces';

export interface IUser {
  localId: string
  profile: {
    country?: string
    gender?: string
    userName: string
    avatar?: string
    followers?: string[]
    subscription?: string[]
    posts?: IPostPreview[]
    favoritePosts?: string[]
  }
}

export type TypeLocalStorageKeys = 'ownerUser' | 'otherUser' | 'ownerUserPosts' | 'otherUserPosts' | 'jwtToken';
export type TypeLocalStorageUserKeys = 'ownerUser' | 'otherUser';

export const LocalStorageKeys = {
  ownerUser: 'ownerUser' as const,
  otherUser: 'otherUser' as const,
  ownerUserPosts: 'ownerUserPosts' as const,
  otherUserPosts: 'otherUserPosts' as const,
  jwtToken: 'jwtToken' as const,
};
