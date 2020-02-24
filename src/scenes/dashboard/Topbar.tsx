import * as React from 'react';
import { noop as _noop } from 'lodash';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Popover from 'react-popover';

import { logoutUser } from './../../service/login/action';
import { setTopBarTitle } from './../../service/alerts/action';
import AlphaButton from 'src/components/alphaButton/AlphaButton';
import './../../common/css/mockcss/style.css';
import { RootStore } from '../../store/rootReducer';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface StateProps {
  topBarTitleSelectedTitle?: string,
}
interface Props extends StateProps, RouteComponentProps<any> {
  loggedUser: string
}
interface State {
  topBarMenuVisible: boolean
}

class Topbar extends React.Component<Props, State> {

  state = {
    topBarMenuVisible: false
  }

  menuClick = () => {
    this.setState({ topBarMenuVisible: !this.state.topBarMenuVisible });
  }

  hidePopOver = () => {
    this.setState({ topBarMenuVisible: false });
  }

  handleLogoutUser = () => {
    logoutUser();
  }

  topBarMenuPopOver = () => (
    <div className={`c-popover js-popover is-ready`} style={{ left: '-124px' }}>
      <div className="c-popover__body">
        <ul className="g-list">
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">
              {formatMessage('topBar.settings')}
            </button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">
              {formatMessage('topBar.help')}
            </button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">
              {formatMessage('topBar.about')}
            </button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button" onClick={this.handleLogoutUser}>
              {formatMessage('topBar.logout')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )

  render() {
    const { topBarMenuVisible } = this.state;
    const { topBarTitleSelectedTitle, loggedUser } = this.props; 
 
    return (
      <header className="c-top-bar">
        <div className="c-top-bar__inner">
          <div className="o-heading js-top-bar__title">
            {topBarTitleSelectedTitle === "Logical view's Attribute" &&
              <svg className='o-icon o-icon--folder c-tree-view__icon o-icon-rotate90'
                width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.props.history.goBack();
                  setTopBarTitle('Logical views');
                }}>
                <title>Icon</title>
                <use xlinkHref={SvgIconEnum.CARETLEFTCLOSE.url}></use>
              </svg>}
            <h1 className="o-heading__title">

              {topBarTitleSelectedTitle}</h1>
          </div>
          <ul className="c-button-group">
            <li className="c-button-group__item">
              <AlphaButton className="o-btn o-btn--transparent">
                  {formatMessage('topBar.messages' )}
                <span className="o-notification"></span>
              </AlphaButton>
            </li>
            <li className="c-button-group__item">
              <AlphaButton className="o-btn o-btn--transparent">
                {formatMessage('topBar.notifications')}
              </AlphaButton>
            </li>
            <li className="c-button-group__item">
              <Popover
                preferPlace ='row'
                place='below'
                isOpen={topBarMenuVisible}
                body={this.topBarMenuPopOver()}
                onOuterAction={this.hidePopOver}>
                <AlphaButton className="o-btn o-btn--transparent o-btn--small-icon js-popover-trigger" onClick={this.menuClick}>
                  {loggedUser}
                  <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.98 4.97" width="100%" height="100%" className="o-icon o-icon--caret-down o-icon--appended">
                    <title>arrow-down-icon</title>
                    <use xlinkHref={SvgIconEnum.CARETDOWN.url}></use>
                  </svg>
                </AlphaButton>
              </Popover>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: RootStore) => ({
  topBarTitleSelectedTitle: state.alertsReducer.topBarTitleSelectedSb
})

const TopbarConnected = connect<{}, {}, Props>(mapStateToProps, null)(Topbar);

export const TopbarConnectedWithRouter = withRouter(TopbarConnected)

