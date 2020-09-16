import React, {PropsWithChildren} from 'react'
import './navBar.css'
import {NavLink} from "react-router-dom";
import {MainNavBarModelProps} from "../navBar-controller";


export const navBar: React.FC<PropsWithChildren<MainNavBarModelProps>> = ( props: PropsWithChildren<MainNavBarModelProps>) => {
    //console.log(props)
    return (
        <div className="row no-gutters">
            <div className="col-3">
                <div id="main-sidebar">
                    <div className="logo">
                        <NavLink to="/"><h1>Sonic</h1></NavLink>
                        <span>Creative Portfolio Template</span>
                    </div>
                    <ul className="main-menu">
                        <li className="home">
                            <NavLink to="/" activeClassName="active-home">Home</NavLink>
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
                    <main>{props.children}</main>
                </div>
            </div>
        </div>
    )
}
