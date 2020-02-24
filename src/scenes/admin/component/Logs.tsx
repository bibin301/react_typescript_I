import * as React from 'react';
import * as PropTypes from 'prop-types';
import { map as _map } from 'lodash';
import { isEmpty as _isEmpty, includes as _includes } from 'lodash';
import { noop as _noop } from 'lodash';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RowCard from './../../../components/rowCard/AlphaRowCard';
import AlphaButton from './../../../components/alphaButton/AlphaButton';
import { setTopBarTitle } from './../../../service/alerts/action';
import { formatMessage } from './../../../common/translation/Translate';
import SvgIconEnum from './../../../constants/icons/svgIconsEnum';
import { getAdminLogsByCatagory } from './../../../service/admin/action';

interface Props extends RouteComponentProps<any> {
  availablePerms: Array<number>  
}
class Logs extends React.Component<Props, null> {

  private emptyAdminList = () => {
    return (
      <div className="no-more-alert">
        {formatMessage('global.noMoreData')}
      </div>);
  }
  private onClickLog = (id: string) =>{
    switch (+id){
      case 551:
        this.props.history.push('/dashboard/admin/logs/security_log');
        getAdminLogsByCatagory("SECURITY");
        setTopBarTitle("Logs/ Security");
        break;
      case 550:
        this.props.history.push('/dashboard/admin/logs/genaral_log');
        getAdminLogsByCatagory("GENERAL");
        setTopBarTitle("Logs/ Genaral");
        break;
      case 552:
        this.props.history.push('/dashboard/admin/logs/user_action_log');
        getAdminLogsByCatagory("USERACTION");
        setTopBarTitle("Logs/ User Action");
        break;
      case 554:
        this.props.history.push('/dashboard/admin/logs/application_log');
        getAdminLogsByCatagory("APPLICATION");
        setTopBarTitle("Logs/ Application");
        break;
      case 555:
        this.props.history.push('/dashboard/admin/logs/crawler_log');
        getAdminLogsByCatagory("CRAWLER");
        setTopBarTitle("Logs/ Crawler");
        break;
      case 556:
        this.props.history.push('/dashboard/admin/logs/realtime_log');
        getAdminLogsByCatagory("REALTIME");
        setTopBarTitle("Logs/ RealTime");
        break;
      case 558:
        this.props.history.push('/dashboard/admin/logs/swift_log');
        getAdminLogsByCatagory("SWIFT");
        setTopBarTitle("Logs/ Swift");
        break;
    }
  }
  render() {
    return (
      <div className="c-content__view">
        <div className="c-content__inner-wrapper">
          <div className="c-content__actions">
            <ul className="g-list g-list--spacing g-list--inline">
              <li className="g-list__item">
                <AlphaButton className="o-btn o-btn--neutral">
                  <svg width="16" height="13" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 11.64" className="o-icon o-icon--prepended">
                    <title>sort-icon</title>
                    <use xlinkHref={SvgIconEnum.BIDIRECTIONALMEDIUM.url}></use>
                  </svg>
                  {formatMessage('global.sort')}</AlphaButton>
              </li>
              <li className="g-list__item">
                <div className="c-multi-btn">
                  <AlphaButton className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
                    <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                      <title>Combined Shape</title>
                      <use xlinkHref={SvgIconEnum.LIST.url}></use>
                    </svg>
                  </AlphaButton>
                  <AlphaButton className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
                    <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                      <title>Combined Shape</title>
                      <use xlinkHref={SvgIconEnum.LISTALT.url}></use>
                    </svg>
                  </AlphaButton>
                </div>
              </li>
              <li className="g-list__item">
                <AlphaButton className="o-btn o-btn--neutral o-btn--tooltip o-btn--tooltip-right" type="button" aria-label="Toggle sidebar">
                  <svg className="o-icon o-icon--sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" id="sidebar-icon" width="100%" height="100%"><title>Sidebar</title>
                    <use xlinkHref={SvgIconEnum.SIDEBAR.url}></use></svg>
                  </svg>
                </AlphaButton>
              </li>
            </ul>
          </div>
          <div className="c-content__scrollable">
            {_isEmpty(LogsList) && this.emptyAdminList()}
            {_map(LogsList,
              (item, i) => (
                  _includes( this.props.availablePerms, item.viewID) && <RowCard key={i}
                  id={item.viewID.toString()}
                  icon='list'
                  label={item.label}
                  name={item.name}
                  onAction={this.onClickLog}
                  moreActionDisabled={true} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Logs);

const LogsList = [
  {
    label: 'Security log',
    viewID: 551,
    name: null
  },
  {
    label: 'General Log',
    viewID: 550,
    name: null
  },
  {
    label: 'UserAction Log',
    viewID: 552,
    name: null
  },
  {
    label: 'Application Log',
    viewID: 554,
    name: null
  },
  {
    label: 'Crawler Log',
    viewID: 555,        
    name: null
  },
  {
    label: 'RealTime Log',
    viewID: 556,
    name: null
  },
  {
    label: 'Swift Log',
    viewID: 558,
    name: null
  },
];
