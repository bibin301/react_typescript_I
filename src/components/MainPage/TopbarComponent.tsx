import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { logoutUser } from './../../service/login/action';
import {formatMessage} from './../../common/translation/Translate';
import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import icon from './../../constants/icons/IconsEnum';
import PopOver from './../popOver/PopOver';
import { RootStore } from './../../store/rootReducer';
import { userMenuOpen } from './../../service/common/action';

//DEBUG
import { store } from './../../index';
const debugStore =  () :any => {
  console.log(store.getState());
}

interface stateTopbar {
}
//TODO maybe we could store the messages and notifications in the store but it could be possible
//to just dispatch the info that a new one came in and then load it when you click on the button
//to avoid having to may things in memory
interface propsTopBar {
  title: string,
  loginInfoDTO: LoginInfoDTO,
  userMenuOpen: boolean,
  newNotification?: boolean,
  newMessage?: boolean
}

class Topbar extends React.Component<propsTopBar, stateTopbar> {
  constructor(props: propsTopBar) {
    super(props);
    this.openUserMenu = this.openUserMenu.bind(this);

    //DEBUG
    this.debugStore = this.debugStore.bind(this);
  }

  notification(notification: boolean) {
    if(notification) {
      return(<span className="o-notification "></span>)
    }
  }

  //for the onclick message/notification/settings/logout/help and about use an actions

  openUserMenu() {
    userMenuOpen();
  }

  //DEBUG
  debugStore() {
    console.log(store.getState());
  }


  render() {
    return (
      <header className="c-top-bar js-top-bar">
        <div className="c-top-bar__inner">
          <div className="o-heading js-top-bar__title">
            <h1 className="o-heading__title">{this.props.title}</h1>
          </div>
          <ul className="g-list g-list--extra-spacing g-list--inline">
            <li className="g-list__item">
              <button className="o-btn o-btn--transparent" type="button">{formatMessage('topbar.messages')}{this.notification}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--transparent" type="button">{formatMessage('topbar.notification')}{this.notification}</button>
            </li>
            <li className="g-list__item">
            <button className="o-btn o-btn--transparent o-btn--small-icon js-popover-trigger" type="button" onClick={this.openUserMenu}>{ this.props.loginInfoDTO.user.name}
                <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.98 4.97" width="100%" height="100%" className="o-icon">
                  <title>{icon.CARETDOWN.title}</title>
                  <use xlinkHref={icon.CARETDOWN.url}></use>
                </svg>
            </button>
          </li>
        </ul>
    </div>
    {userMenu(this.props.userMenuOpen, this.debugStore)}
</header>
    );
  }
}

const userMenu = (props: boolean, /*DEBUG*/debug: any) => {
  if (props) {
    return (
      <PopOver>
      <div className={'c-popover js-popover'}  >
        <div className="c-popover__body">
          <ul className="g-list">
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.settings')}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.help')}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.about')}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button" onClick={logoutUser}>{formatMessage('topbar.logout')}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button" onClick={debug}>{'Debug'}</button>
            </li>
          </ul>
        </div>
      </div>
    </PopOver>
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  userMenuOpen: state.commonReducer.userMenuOpen,
  newNotification: state.commonReducer.newNotification,
  newMessage: state.commonReducer.newMessage
});

export const TopbarConnected = connect(mapStateToProps, null)(Topbar);
