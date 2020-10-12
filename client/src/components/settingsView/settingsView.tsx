import React from "react";
import IAuthModel from "../../domain/models/AUTH/interfaces/IAuthModel";
import {LoadingLogo} from "../shared/LoadingLogo";


interface IProps {
    model: IAuthModel;
}

export class SettingsView extends React.Component<IProps> {
    render() {
        const { model } = this.props;

        if(!model.loadingLogo) {
            return (
                <div>
                    <div className="container">
                        <h2>Setting:</h2>
                        <ul className="setting-bar">
                            <li><a href="#" onClick={model.logout}>Exit</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (
                    <LoadingLogo />
            )
        }
    }
}
