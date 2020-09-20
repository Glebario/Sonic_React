import AuthListener from './AuthListener';
import {action, computed, observable} from "mobx";

export default class AuthBusinessStore {
  //private authListeners: AuthListener[];
  @observable private isAuthorized: boolean;
  @observable private authToken: string;

  public constructor() {
    this.isAuthorized = false;
    //this.authListeners = [];
    this.authToken = '';
  }

  @action public onSignedIn(authToken: string): void {
    this.isAuthorized = true;
    this.authToken = authToken;
    //this.notifyListeners();
  }

  @action public onSignedOut(): void {
    this.isAuthorized = false;
    this.authToken = '';
    //this.notifyListeners();
  }

  @computed public get isUserAuthorized(): boolean {
    return this.isAuthorized;
  }

  /**
   * @throws {Error} if user is not authorized
   */
  public getAuthToken(): string {
    if (!this.isAuthorized) {
      throw new Error('User is not authorized');
    }

    return this.authToken;
  }

  // public addAuthListener(authListener: AuthListener): void {
  //   this.authListeners.push(authListener);
  // }
  //
  // public removeAuthListener(authListener: AuthListener): void {
  //   this.authListeners.splice(this.authListeners.indexOf(authListener), 1);
  // }
  //
  // private notifyListeners(): void {
  //   this.authListeners.forEach((listener) => listener.onAuthChanged());
  // }
}
