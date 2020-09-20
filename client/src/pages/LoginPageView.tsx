import React from "react";

import ILoginModel from "../domain/models/interfaces/ILoginModel";

import LoginView from "../components/LoginView";

interface IProps {
  model: ILoginModel;
}

export class LoginPageView extends React.Component<IProps> {
  render() {
    const { model } = this.props;

    return (
      <LoginView model={model}/>
    );
  }
}