import React from "react";

import IAuthModel from "../../../domain/models/AUTH/interfaces/IAuthModel";

import RegistrationView from "../../../components/AUTH/registration/RegistrationView";


interface IProps {
    model: IAuthModel;
}

export class RegistrationPageView extends React.Component<IProps> {
    render() {
        //console.log(this.props)
        const { model } = this.props;

        return (
            <RegistrationView model={model} />
        );
    }
}
