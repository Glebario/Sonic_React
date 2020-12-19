import { IValidateError, Schema, SchemaName } from './auth-interfaces';

export default interface IAuthModel {
  // Temporary property, should be moved to AuthService
  isUserLoggedIn: boolean;

  emailQuery: string;
  passwordQuery: string;
  confirmPasswordQuery: string;

  userNameQuery: string;
  countryQuery: string;
  genderQuery: string;

  validateErrors: IValidateError[];
  serverErrorMessage: string;
  loadingLogo: boolean;

  onEmailQueryChanged(loginQuery: string): void;
  onPasswordQueryChanged(passwordQuery: string): void;
  onConfirmPasswordQueryChanged(confirmPasswordQuery: string): void;

  onUserNameQueryChanged(userName: string): void;
  onCountryQueryChanged(country: string): void;
  onGenderQueryChanged(gender: string): void;

  validateForm(schemaName: SchemaName, formValue: Schema): void

  loginSubmit(): void;
  registrationSubmit(): void;
  logout(): void;

  updateSession(): void
}
