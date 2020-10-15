import "./NavBar.css"
import {observer} from "mobx-react";
import { resolve } from "inversify-react";
import {NavLink} from "react-router-dom";
import React, {PropsWithChildren} from "react";
import DependencyType from "../../../inversify.types";
import IUserModel from "../../../domain/models/interfaces/IUserModel";




@observer
export default class NavBar extends React.Component<PropsWithChildren<void>> {

    @resolve(DependencyType.UserModel) private readonly userModel: IUserModel;

    public render(): JSX.Element {
        return (
            <div className="row">
                <div className="col-3">
                    <div id="main-sidebar">
                        <div className="logo">
                            <NavLink to={`/user/${this.userModel.user.localId}`}><h1>Sonic</h1></NavLink>
                            <span>Creative Portfolio Template</span>
                        </div>
                        <ul className="main-menu">
                            <li className="home">
                                <NavLink to={`/user/${this.userModel.user.localId}`} activeClassName="active-home">Home</NavLink>
                            </li>
                            <li className="users">
                                <NavLink to="/users" activeClassName="active-users">Users</NavLink>
                            </li>
                            <li className="posts">
                                <NavLink to="/posts-feed" activeClassName="active-posts">Posts</NavLink>
                            </li>
                            <li className="creation">
                                <NavLink to="/creation" activeClassName="active-creation">Create Post</NavLink>
                            </li>
                            <li className="my-favorite-posts">
                                <NavLink to="/favoritePosts" activeClassName="active-my-favorite-posts">Favorite posts</NavLink>
                            </li>
                            <li className="settings">
                                <NavLink to="/settings" activeClassName="active-settings">Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <div className="content">
                        <main>{this.props.children}</main>
                    </div>
                </div>
            </div>
        )
    }


}
