import { IUser } from './generic-interfaces';

export interface ILoginForm {
  email: string
  password: string
}

export interface IRegistrationForm {
  userName: string
  country: string
  gender: string
  email: string
  password: string
  confirmPassword: string
}

export type LoginSchemaName = 'loginSchema';
export type RegistrationSchemaName = 'registrationSchema';

export type Schema = ILoginForm | IRegistrationForm;
export type SchemaName = LoginSchemaName | RegistrationSchemaName;

// type InferValueTypes<T> = T extends { [key: string]: infer U}
//   ? U
//   : never;

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegister {
  email: string
  password: string
  profile: {
    country: string
    gender: string
    userName: string
    avatar?: string
    followers?: string[]
    subscription?: string[]
    posts?: []
    favoritePosts?: string[]
  }
}

export interface IAuthResponse {
  userResponse: IUser;
  token: string
}

export interface IAuthErrorResponse {
  message: string
}

export type IValidateError = {
  pathField: string
  message: string
};
