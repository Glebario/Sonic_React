import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {LoginPageController} from "./components/auth-components/login/login-controller";
import {RegistrationPageController} from "./components/auth-components/registration/registration-controller";
import {UserPageComponent} from "./components/main-content-components/child-pages/user-page/user-page";
import {PostPageComponent} from "./components/main-content-components/child-pages/post-page/post-page";
import {PostsFeedPageComponent} from "./components/main-content-components/child-pages/posts-feed-page/posts-feed-page";
import {UserSearchPageComponent} from "./components/main-content-components/child-pages/users-search-layout/user-search-page";
import {FavoritePostsPageComponent} from "./components/main-content-components/child-pages/favorite-posts-page/favorite-posts-page";
import {CreatePostPageComponent} from "./components/main-content-components/child-pages/create-post-page/create-post-page";
import {AllUsersPageComponent} from "./components/main-content-components/child-pages/users-search-layout/child-pages/all-users-page/all-users-page";
import {FollowersUsersPageComponent} from "./components/main-content-components/child-pages/users-search-layout/child-pages/followers-users-page/followers-users-page";
import {SubscriptionUsersPageComponent} from "./components/main-content-components/child-pages/users-search-layout/child-pages/subscription-users-page/subscription-users-page";
import GuardRoute from "./shared/utils/auth.guard";
import {NavBarController} from "./components/main-content-components/navBar/navBar-controller";
import {SettingsPageController} from "./components/main-content-components/settings-page/settings-controller";



export const useRoutes: any = (isAuthenticated: boolean) => {
    if(isAuthenticated) {
        return (
            <NavBarController>
                {/*<GuardRoute path='/posts-feed' Component={PostsFeedPageComponent} auth={isAuthenticated} />*/}
                <Switch>
                    <Route component={UserPageComponent} path="/user/:userId" />
                    <Route component={PostPageComponent} path="/user/:userId/post/:postId" />
                    <GuardRoute path='/posts-feed' Component={PostsFeedPageComponent} auth={isAuthenticated} />
                    {/*<Route component={PostsFeedPageComponent} path="/posts-feed" />*/}
                    <Route path="/users">
                        <UserSearchPageComponent>
                            <Switch>
                                <Route component={AllUsersPageComponent} path="/users/all-users" />
                                <Route component={FollowersUsersPageComponent} path="/users/my-followers" />
                                <Route component={SubscriptionUsersPageComponent} path="/users/my-subscription" />
                                <Redirect to="/users/all-users" />
                            </Switch>
                        </UserSearchPageComponent>
                    </Route>
                    <Route component={SettingsPageController} path="/settings" />
                    <Route component={FavoritePostsPageComponent} path="/favoritePosts" />
                    <Route component={CreatePostPageComponent} path="/creation" />
                    <Route path="*" render={() => "404 NOT FOUND"} />
                </Switch>
                <Redirect to="/posts-feed" />
            </NavBarController>
        )
    }
    else {
        return (
            <Switch>
                <Route component={LoginPageController} path="/sign-in" />
                <Route component={RegistrationPageController} path="/sign-up" />
                <Redirect to="/sign-in" />
            </Switch>
        )
    }
}
