import * as React from 'react';
import { map as _map } from 'lodash';
import { isEmpty as _isEmpty } from 'lodash';

import RowCard from './../../components/rowCard/AlphaRowCard';
import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

const mapRulesListTypeToBadge = {
  0: 'Draft',
  1: 'Error',
  2: 'Validated'

}
const mapScenariosListTypeToBadge = {
  0: 'Draft',
  1: 'Production',
  2: 'Outdated'
}

interface Props {
  userId?: string,
  id?: number,
  name?: string,
  allDetectionList?: any,
  isRules?: any,
  isScenarios?: any
}

export default class DetectionGrid extends React.Component<Props, null> {

  private emptyDetectionListAlert = () => {
    return (
      <div className="no-more-alert">
        No more detection...
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
                <AlphaButton className="o-btn o-btn--neutral">
                  <svg width="16" height="13" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 11.64" className="o-icon o-icon--prepended">
                    <title>sort-icon</title>
                    <use xlinkHref={SvgIconEnum.BIDIRECTIONAL.url}></use>
                  </svg>
                  {formatMessage('global.sort')}
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

          <div className="c-content__scrollable">
            {_isEmpty(this.props.allDetectionList) && this.emptyDetectionListAlert()}
            {_map(this.props.allDetectionList,
              (item, i) => (
                <RowCard key={i}
                  id={item.id}
                  icon='profile'
                  label={item.ruleName ? item.ruleName : item.name}
                  name={item.description}
                  badge={this.props.isRules ? mapRulesListTypeToBadge[item.status] : this.props.isScenarios ? mapScenariosListTypeToBadge[item.status] : null}
                  // onAction={this.dataListAction}
                   />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
