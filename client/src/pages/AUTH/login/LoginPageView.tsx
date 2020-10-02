import React from "react";

import IAuthModel from "../../../domain/models/AUTH/interfaces/IAuthModel";

import LoginView from "../../../components/AUTH/login/LoginView";

interface IProps {
  model: IAuthModel;
}

export class LoginPageView extends React.Component<IProps> {
  render() {
    const { model } = this.props;

    return (
        <LoginView model={model}/>
    );
  }
}
