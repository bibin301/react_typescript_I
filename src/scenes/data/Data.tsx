import * as React from 'react';
import { connect } from 'react-redux';
import { noop as _noop, map as _map, isEmpty as _isEmpty } from 'lodash';

import { getTreeFolderList, getChildrenListByParentID } from 'src/service/data/action';
import { setTopBarTitle } from 'src/service/alerts/action';
import RowCard from './../../components/rowCard/AlphaRowCard';
import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

const mapListTypeToIcon = {
  0: 'folder',
  1: 'document',
  2: 'list',
  3: 'list'
}

interface Props {
  getTreeFolderList: any,
  userId: string,
  id: number,
  name: string,
  childrenListByParentId: any
}

class Data extends React.Component<Props, null> {

  componentDidMount() {
    const { id, userId, name } = this.props;

    getTreeFolderList(id, userId, name);
    setTopBarTitle('My Data')
  }

  dataListAction = (dataID: string) => {
    const { id, userId, name } = this.props;
    getChildrenListByParentID(dataID, id, userId, name)
  }

  showingAlert = () => {
    return (
      <div className="no-more-alert">
        {formatMessage('global.noMoreFileAvailable')}
      </div>);
  }

  render() {
    const addButton = formatMessage('global.new');

    return (
      <div className="c-content__view">
        <div className="c-content__inner-wrapper">
          <div className="c-content__actions">
            <ul className="g-list g-list--spacing g-list--inline">
              <li className="g-list__item">
                {(addButton && <button className="o-btn o-btn--primary" type="button" style={{ top: '15px' }}>
                  {addButton}
                </button>)}
              </li>
            </ul>
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
                <button className="o-btn o-btn--neutral o-btn--tooltip o-btn--tooltip-right" type="button" aria-label="Toggle sidebar">
                  <svg className="o-icon o-icon--sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" id="sidebar-icon" width="100%" height="100%"><title>Sidebar</title>
                    <use xlinkHref={SvgIconEnum.SIDEBAR.url}></use></svg>
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          <div style={{ paddingLeft: '2.5rem' }} className="c-content__scrollable">
            {_isEmpty(this.props.childrenListByParentId) && this.showingAlert()}
            {_map(this.props.childrenListByParentId,
              (item, i) => (
                <RowCard key={i}
                  id={item.id}
                  icon={mapListTypeToIcon[item.listType]}
                  label={item.label}
                  name={item.description}
                  onAction={this.dataListAction} />
              ))}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  childrenListByParentId: state.dataReducer.childrenListByParentId,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  name: state.loginReducer.userDetails.user.name
});

// export default connect(mapStateToProps, mapDispatchToProps)

export const DataDashboard = connect(mapStateToProps,null)(Data);
