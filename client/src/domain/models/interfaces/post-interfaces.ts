export interface IPostPreview {
  userId: string,
  postId: string,
  img: string,
  likes: string[],
  comments: number
}

export interface IGetPostsPreviewResponse {
  postsPreview: IPostPreview[]
}

export interface IGetPostsPreviewErrorResponse {
  message: string
}
