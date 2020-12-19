import './UserView.css';

import React from 'react';
import { observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import IUserModel from '../../domain/models/interfaces/IUserModel';
import { LoadingLogo } from '../shared/LoadingLogo';

interface IProps {
  model: IUserModel;
  match: RouteComponentProps['match']
}

@observer
export default class UserView extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    const { model, match } = props;
    model.checkUser(match.params);
  }

  public render(): JSX.Element {
    const { model } = this.props;

    // console.log(model)

    if (!model.loadingLogo) {
      return (
        <div className="container">
          {model.switchUser && (
            <div className="row no-gutters">
              <div className="col-3">
                <div className="avatarBlock">
                  <div className="avatar">
                    <img src={model.otherUser.profile.avatar} alt="avatar" />
                  </div>
                </div>
              </div>
              <div className=" col-3">
                <div className="info-board">
                  <div className="name">
                    <p>{model.otherUser.profile.userName}</p>
                  </div>
                  <div className="countryGender">
                    <small>
                      {model.otherUser.profile.country}
                      , &emsp;
                      {' '}
                      {model.otherUser.profile.gender}
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="statisticsBoard">

                  <div className="subscriber">
                    <span>Followers:</span>
                    {model.otherUser.profile.followers?.length && (
                      <div>
                        {' '}
                        {model.otherUser.profile.followers.length}
                        {' '}
                      </div>
                    )}

                    {!model.otherUser.profile.followers?.length && (
                      <div>0</div>
                    )}

                    <div className="subscription">
                      <span>Subscription:</span>
                      {model.otherUser.profile.subscription?.length && (
                        <div>
                          {' '}
                          {model.otherUser.profile.subscription.length}
                          {' '}
                        </div>
                      )}

                      {!model.otherUser.profile.subscription && (
                        <div>0</div>
                      )}
                    </div>

                    <div className="quantityPosts">
                      <span>Posts:</span>
                      {model.otherUser.profile.posts?.length && (
                        <div>
                          {' '}
                          {model.otherUser.profile.posts.length}
                          {' '}
                        </div>
                      )}

                      {!model.otherUser.profile.posts.length && (
                        <div>0</div>
                      )}
                    </div>
                  </div>
                  <div className="subscribeBtn">
                    {/* { */}
                    {/*    !model.checkSubscription() */}
                    {/*    && */}
                    {/*    <button> */}
                    {/*        Subscribe */}
                    {/*    </button> */}
                    {/* } */}
                  </div>
                  <div className="subscribeBtnActive">
                    {/* { */}
                    {/*    model.checkSubscription() */}
                    {/*    && */}
                    {/*    <button> */}
                    {/*        Unsubscribe */}
                    {/*    </button> */}
                    {/* } */}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!model.otherUser && (
            <div className="row no-gutters">
              <div className="col-3">
                <div className="avatarBlock">
                  <div className="avatar">
                    <img src={model.ownerUser.profile.avatar} alt="avatar" />
                  </div>
                  <div className=" chooseAvatar">
                    <label htmlFor="file">
                      <span>Choose a FOTO</span>
                      <input type="file" name="file" id="file" className="inputfile" accept="image/*" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="info-board">
                  <div className="name">
                    <p>{model.ownerUser.profile.userName}</p>
                  </div>
                  <div className="countryGender">
                    <small>
                      {model.ownerUser.profile.country}
                      , &emsp;
                      {model.ownerUser.profile.gender}
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="statisticsBoard">
                  <div className="subscriber">
                    <span>Followers:</span>
                    <div>
                      {model.ownerUser.profile.followers.length}
                    </div>
                  </div>
                  <div className="subscription">
                    <span>Subscription:</span>
                    <div>
                      {model.ownerUser.profile.subscription.length}
                    </div>
                  </div>
                  <div className="quantityPosts">
                    <span>Posts:</span>
                    <div>
                      {model.ownerUser.profile.posts.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <div>
        <LoadingLogo />
      </div>
    );
  }
}
