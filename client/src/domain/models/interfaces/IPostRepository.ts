import { GetPostsPreviewResult } from '../structures/RequestToServerResult';

export default interface IPostRepository {
  getPostsPreview(): Promise<GetPostsPreviewResult>
}
