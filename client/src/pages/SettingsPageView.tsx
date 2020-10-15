import React from "react";
import {SettingsView} from "../components/settingsView/settingsView";
import IAuthModel from "../domain/models/interfaces/IAuthModel";
import DependencyType from "../inversify.types";
import {resolve} from "inversify-react";



export class SettingsPageView extends React.Component {

    @resolve(DependencyType.AuthModel) private readonly authModel: IAuthModel

    public render(): JSX.Element {

        return (
            <SettingsView model={this.authModel} />
        )
    }
}
