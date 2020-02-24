import * as React from 'react';
import * as PropTypes from 'prop-types';
import { map as _map } from 'lodash';
import { isEmpty as _isEmpty } from 'lodash';
import { noop as _noop } from 'lodash';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import RowCard from './../../../components/rowCard/AlphaRowCard';
import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { setTopBarTitle } from 'src/service/alerts/action';
import { formatMessage } from './../../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props extends RouteComponentProps<any> {
  userId?: string,
  id?: number,
  name?: string,
  setTopBarTitle?: any,
  adminDataList?: any,
  fetchAttribute?: any
}

class AdminGrid extends React.Component<Props, null> {

  public static defaultProps: Partial<Props> = {
    userId: '',
    id: 1,
    name: '',
    adminDataList: [],
    fetchAttribute: []
  };
  private emptyAdminList = () => {
    return (
      <div className="no-more-alert">
        {formatMessage('global.noMoreData')}
      </div>);
  }

  render() {
    const { adminDataList, fetchAttribute } = this.props;

    const customProperties = [{
      property: formatMessage('global.edit'),
      actionOnClick: _noop
    }, {
      property: formatMessage('global.showAttributes'),
      actionOnClick: () => {
        this.props.history.push('/dashboard/admin/logical_views/attribute');
        setTopBarTitle("Logical view's Attribute");
      }
    }];

    return (
      <div className="c-content__view">
        <div className="c-content__inner-wrapper">
          <div className="c-content__actions">
            <ul className="g-list g-list--spacing g-list--inline">
              <li className="g-list__item">
                <AlphaButton className="o-btn o-btn--neutral js-popover-trigger  o-btn has-popover-displayed">
                  <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                    <title>filter-icon</title>
                    <use xlinkHref={SvgIconEnum.FILTER.url}></use>
                  </svg>
                  {formatMessage('global.filter')}
                </AlphaButton>
              </li>
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
            {_isEmpty(adminDataList) && this.emptyAdminList()}
            {_map(adminDataList,
              (item, i) => (
                <RowCard key={i}
                  id={item.id.toString()}
                  icon='logicalView'
                  label={item.description}
                  name={item.entityUid}
                  cardIndex={i}
                  fetchAttribute={fetchAttribute}
                  customProperties={customProperties} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(AdminGrid);
