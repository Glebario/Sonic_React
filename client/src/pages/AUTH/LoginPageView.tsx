import React from "react";

import IAuthModel from "../../domain/models/AUTH/interfaces/IAuthModel";

import LoginView from "../../components/AUTH/login/LoginView";
import {resolve} from "inversify-react";
import {DependencyType} from "../../inversify.types";



export class LoginPageView extends React.Component {

  @resolve(DependencyType.AuthModel) private readonly authModel: IAuthModel

  render() {

    return (
        <LoginView model={this.authModel} />
    );
  }
}
