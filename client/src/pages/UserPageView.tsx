import React from "react";
import IUserModel from "../domain/models/USER/interfaces/IUserModel";
import UserView from "../components/userView/UserView";
import {resolve} from "inversify-react";
import {DependencyType} from "../inversify.types";



export class UserPageView extends React.Component {

    @resolve(DependencyType.UserModel) private readonly userModel: IUserModel;

    render(): JSX.Element {

        return (
            <UserView model={this.userModel} />
        );
    }
}
