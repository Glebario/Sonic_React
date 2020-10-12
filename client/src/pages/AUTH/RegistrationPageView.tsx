import React from "react";

import IAuthModel from "../../domain/models/AUTH/interfaces/IAuthModel";

import RegistrationView from "../../components/AUTH/registration/RegistrationView";

import {History} from "history"
import {resolve} from "inversify-react";
import {DependencyType} from "../../inversify.types";


interface IProps {
    history: History
}

export class RegistrationPageView extends React.Component<IProps> {

    @resolve(DependencyType.AuthModel) private readonly authModel: IAuthModel;

    render() {
        const { history } = this.props;

        return (
            <RegistrationView model={this.authModel} history={history} />
        );
    }
}
