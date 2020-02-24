import * as React from 'react';

import Attribute from 'src/components/attribute/Attribute';
import Accordion from 'src/components/accordion/Accordion';

import visibleTabEnum from './../../constants/SidebarEnum';
import { formatMessage } from './../../common/translation/Translate';

import { SideBarHeader } from './../sideBar/Header';
import navEnum from './../../constants/NavEnum';
import { RootStore } from './../../store/rootReducer';
import { Details } from './../sideBar/Details';
import { History } from './../sideBar/History';
import { Related } from './../sideBar/related/Related';
import { connect } from 'react-redux';

interface Props {
  rightPanelDetails?: any, //TODO
  rightPanelHistoryFetch?: Function,
  allRightPanelHistoryData?: any, //TODO
  sidebar?: boolean,
  allRightPanelRelatedData?: any //TODO
  onFileDownload?: Function,
  onFileUpload?: Function,
  userId?: string,
  availableLists?: any, //TODO should be in the model since it comes from the webservices
  commentsLength?: number,
  onCommentModal?: any, //TODO
  onDescPopover?: any, //TODO
  navEnum?: navEnum,
  tabSelected?: visibleTabEnum,
}

interface State {
  isRpPopOver: boolean
}

class Sidebar extends React.Component<Props, State> {
  public static defaultProps: Props = {
    rightPanelDetails: {},
    rightPanelHistoryFetch: undefined,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const isRpPopOver = this.state;

    // Rp : Right Pane
    const toggleRpPopOver = () => {
      this.setState({ isRpPopOver: !this.state.isRpPopOver });
    }
    const hidePopOver = () => {
      this.setState({ isRpPopOver: false });
    }
    const {allRightPanelHistoryData,
      allRightPanelRelatedData } = this.props;
/*
    const rpRelatedPopOver = () => (
      <PopOver hidePopOver={hidePopOver} disableOnClickOutside={undefined} enableOnClickOutside={undefined}>
        <div className={`c-popover js-popover is-ready ${isRpPopOver ? '' : 'is-hidden'}`} style={{ top: '150px', left: '120px' }} >
          <div className="c-actions-list">
            <ul className="c-actions-list__list">
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('alert.sentToAnalysis')}
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('alert.proprieties')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </PopOver>
    );*/

    return (
      <div className={`c-content__sidebar js-content__sidebar js ${this.props.sidebar ? '' : 'is-hidden'}`}>
        {/*rpRelatedPopOver()* TODO what is it used for ? */}
        <div className="c-tabs js-tabs c-sidebar__tabs c-popover-- is-ready">
          <SideBarHeader navEnum={this.props.navEnum}></SideBarHeader>
          <div className="c-tabs__content">
            <Related menuSelected={this.props.navEnum} visibleTab={this.props.tabSelected}></Related>
            <History historyData={[]} visibleTab={this.props.tabSelected}></History>
          </div>
        </div>
        {/* <div className="c-content__sidebar-footer">
          <button className="o-btn o-btn--primary c-sidebar__tabs">analysis</button>
          <button className="o-btn c-sidebar__tabs">comments</button>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state: RootStore) => ({
  tabSelected: state.commonReducer.tabSelected,
  sidebar: state.commonReducer.sidebar
})

export const SidebarConnected = connect(mapStateToProps, null)(Sidebar);
