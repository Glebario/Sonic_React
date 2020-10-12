import React from "react";
import IUserModel from "../../domain/models/USER/interfaces/IUserModel";
import {observer} from "mobx-react";



interface IProps {
    model: IUserModel;
}

@observer
export default class UserView extends React.Component<IProps> {
    public render(): JSX.Element {
        const {model} = this.props;
        console.log()
        //console.log(model)
        return (
            <div>
                <h1>jjj</h1>
            </div>
        )
    }
}
