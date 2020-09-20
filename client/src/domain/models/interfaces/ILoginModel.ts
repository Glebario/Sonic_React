export default interface ILoginModel {
  // Temporary property, should be moved to AuthService
  isUserLoggedIn: boolean;

  emailQuery: string;
  passwordQuery: string;

  errorMessage: string;

  onEmailQueryChanged(loginQuery: string): void;
  onPasswordQueryChanged(passwordQuery: string): void;

  submit(): void;
  logout(): void;
}
