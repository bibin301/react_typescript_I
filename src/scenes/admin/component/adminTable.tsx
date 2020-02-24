import * as React from 'react';
import {map as _map } from 'lodash';
import * as Popover from 'react-popover';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props {
  attributeList: any
}

interface State {
  isOptionVisible: boolean,
  currentIndex: string
}

export default class AdminTable extends React.Component<Props, State> {

  state = {
    isOptionVisible: false,
    currentIndex: ''
  };

  render() {
    const { attributeList } = this.props;

    const hideOption = () => {
      this.setState({ isOptionVisible: false })
    }

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
                      <use xlinkHref={SvgIconEnum.LIST.url}></use>
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
          <table className="c-table js-table">
            <thead className="c-table__head">
              <tr>
                <th className="c-table__head-data c-table__more-btn-column">&nbsp;</th>
                <th className="c-table__head-data c-table__head-data--sortable js-sortable-head">
                  {formatMessage('admin.fullName')}
                </th>
                <th className="c-table__head-data c-table__head-data--sortable js-sortable-head">
                  {formatMessage('admin.importable')}
                </th>
                <th className="c-table__head-data c-table__head-data--sortable js-sortable-head">
                  {formatMessage('admin.viewable')}
                </th>
                {/* <th className="c-table__head-data c-table__head-data--sortable js-sortable-head">
            Status
          </th> */}
              </tr>
            </thead>
            <tbody className="c-table__body">
              {_map(attributeList, (each, i) =>
                (<React.Fragment key={i}>
                  <tr className="c-table__row js-table-row">
                    <Popover isOpen={this.state.isOptionVisible && this.state.currentIndex === i}
                      place='below'
                      className={'ow-popoverIndex'}
                      tipSize={0.01}
                      onOuterAction={hideOption}
                      key={i}
                      body={
                        <div className="c-popover">
                          <div className="c-popover__body">
                            <div className="c-actions-list">
                              <ul className="c-actions-list__list">
                                <li className="c-actions-list__item" >
                                  <span className="o-btn o-btn--inline js-row-card-switch">
                                    {formatMessage('global.edit')}
                                  </span>
                                </li>
                                <li className="c-actions-list__item">
                                  <span className="o-btn o-btn--inline js-row-card-switch">
                                    {formatMessage('global.delete')}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>}>

                      <td className="c-table__data c-table__data--action" data-editable="0">
                        <button className="o-more-btn c-table__more-btn o-more-btn--thin js-popover-trigger" type="button"
                          onClick={() => this.setState({ isOptionVisible: !this.state.isOptionVisible, currentIndex: i })}>

                          <span className="u-visually-hidden">More</span>
                        </button>
                      </td>
                    </Popover>

                    <td className="c-table__data" data-editable="1">
                      {each.description}
                    </td>
                    <td className="c-table__data" data-editable="1">
                      {each.importable ? 'true' : 'false'}
                    </td>
                    <td className="c-table__data" data-editable="1">
                      {each.viewable ? 'true' : 'false'}
                    </td>
                    {/* <td className="c-table__data" data-editable="1">
                  {each.description}
                </td> */}
                  </tr>
                </React.Fragment>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
