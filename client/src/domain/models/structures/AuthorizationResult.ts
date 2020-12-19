import { IAuthErrorResponse, IAuthResponse } from '../interfaces/auth-interfaces';

export interface AuthorizationResult {
  successResult: IAuthResponse;
  err?: IAuthErrorResponse
}

export interface RegistrationResult {
  err?: IAuthErrorResponse
}
