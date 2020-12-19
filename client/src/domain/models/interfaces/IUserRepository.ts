import { GetUserResult } from '../structures/RequestToServerResult';

export default interface IUserRepository {
  getUser(localId: string): Promise<GetUserResult>
}
