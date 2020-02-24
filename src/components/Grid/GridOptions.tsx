import * as React from 'react';
import { noop as _noop } from 'lodash';
import * as Popover from 'react-popover';
import { connect } from 'react-redux';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import 'src/common/css/mockcss/style.css';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';
import { RootStore } from '../../store/rootReducer';

interface State {
  isSortVisible: boolean,
  isDisplayVisible: boolean,
  isFilterVisible: boolean,
}

interface StateProps {
  childPopover?: boolean,
}

interface Props extends StateProps {
  selectedItems: any,
  onPageChange: (pageNumer:any ,maxPage: any)=> void,
  toggleParameters: ()=> void,
  filterPopover: ()=> JSX.Element,
  sortPopover: ()=> JSX.Element,
  displayPopover: ()=> JSX.Element,
  toggleRightPane: (id: any)=> void,
  toggleIconView: ()=> void,
  // Todo one of type to stable one type
  maxRecordPerPage: number | string,
  toggleTableView: ()=> void,
  isTableView: any,
  isRightPaneActive: any,
  closeRightPane: any
}

class GridOptions extends React.Component<Props, State>{
  state = {
    isSortVisible: false,
    isDisplayVisible: false,
    isFilterVisible: false
  }
  
  private toggleFilter= () => {
    this.setState({ isFilterVisible: !this.state.isFilterVisible });
  }
  private toggleSort= () => {
    this.setState({ isSortVisible: !this.state.isSortVisible });
  }
  private toggleDisplay= () => {
    this.setState({ isDisplayVisible: !this.state.isDisplayVisible });
  }

  public render(){
    const { selectedItems, toggleParameters, toggleIconView, displayPopover, filterPopover,
      toggleTableView, onPageChange, closeRightPane, isRightPaneActive, isTableView, toggleRightPane, maxRecordPerPage, sortPopover } = this.props;
    const isVisible = (selectedItems.length !== 0 ? 'is-visible' : '');

    let pageNumer = 0;
    return (
      <div className="c-content__actions  js-content-actions">
        <ul className={`g-list g-list--spacing g-list--inline g-list--will-hide js-will-hide ${isVisible}`}>
          <li className="g-list__item">
            <AlphaButton className="o-btn o-btn--primary js-to-analysis">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon o-icon--linkchart o-icon--prepended">
                <title>analysis-icon</title>
                <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
              </svg>
              {formatMessage('global.analysis')}
            </AlphaButton>
          </li>
          <li className="g-list__item">
            <AlphaButton className="o-btn o-btn--warning">
              <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.55 12.54" width="100%" height="100%" className="o-icon o-icon--delete o-icon--prepended">
                <title>trash-icon</title>
                <use xlinkHref={SvgIconEnum.DELETE.url}></use>
              </svg>
              {formatMessage('global.delete')}
            </AlphaButton>
          </li>
          <li className="g-list__item js-empty-list-item">
            {selectedItems.length} {formatMessage('global.itemSelected')}
          </li>
        </ul>
        <ul className="g-list g-list--spacing g-list--inline">
          <li className="g-list__item">
            <Popover
              isOpen={this.state.isFilterVisible}
              body={filterPopover()}
              onOuterAction={()=> !this.props.childPopover && this.setState({ isFilterVisible: false })}
              preferPlace='start'
              place='below'
              className={'c-popover js-popover is-ready'}
              style={{ width: '66rem'}}
              /* enterExitTransitionDurationMs={1} */
              tipSize={0.01} >
              <AlphaButton className="o-btn o-btn--neutral js-popover-trigger  o-btn" onClick={this.toggleFilter}>
                <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                  <title>filter-icon</title>
                  <use xlinkHref={SvgIconEnum.FILTER.url}></use>
                </svg>
                {formatMessage('filter.filter')}
              </AlphaButton>
            </Popover>
          </li>
          <li className="g-list__item">
            <Popover
              isOpen={this.state.isSortVisible}
              body={sortPopover()}
              onOuterAction={() => this.setState({ isSortVisible: false })}
             /*  enterExitTransitionDurationMs={1} */
              place='below'>
              <AlphaButton className="o-btn o-btn--neutral" onClick={this.toggleSort}>
                <svg width="16" height="10" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 11.64" className="o-icon o-icon--prepended">
                  <title>sort-icon</title>
                  <use xlinkHref={SvgIconEnum.BIDIRECTIONAL.url}></use>
                </svg>
                  {formatMessage('global.sort')}
              </AlphaButton>
            </Popover>
          </li>
          <li className="g-list__item">
            <Popover
              isOpen={this.state.isDisplayVisible}
              body={displayPopover()}
              onOuterAction={() => this.setState({ isDisplayVisible: false })}
             /*  enterExitTransitionDurationMs={1} */
              place='below' >
              <AlphaButton className="o-btn o-btn--neutral" onClick={this.toggleDisplay}>
                <svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                  <title>display-icon</title>
                  <use xlinkHref={SvgIconEnum.COLUMNS.url}></use>
                </svg>
                {formatMessage('global.display')}
              </AlphaButton>
            </Popover>
          </li>
          <li className="g-list__item">
            <div className="c-multi-btn">
              <AlphaButton className={`o-btn o-btn--tooltip c-multi-btn__item ${!isTableView ? 'is-active' : ''} js-row-cards-view-trigger`} ariaLabel="Row cards" 
                onClick={() => {
                  toggleIconView();
                  closeRightPane();
                }}>
                <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                  <title>Combined Shape</title>
                  <use xlinkHref={SvgIconEnum.LIST.url}></use>
                </svg>
              </AlphaButton>

              <AlphaButton className={`o-btn o-btn--tooltip c-multi-btn__item ${isTableView ? 'is-active' : ''} js-row-cards-view-trigger`} ariaLabel="Table view" 
                onClick={() => {
                  toggleTableView();
                  closeRightPane();
                  onPageChange(pageNumer, maxRecordPerPage);
                }} >
                <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                  <title>Combined Shape</title>
                  <use xlinkHref={SvgIconEnum.LISTALT.url}></use>
                </svg>
              </AlphaButton>
            </div>
          </li>
         {toggleParameters !== _noop  && <li className="g-list__item">
            <AlphaButton className="o-btn o-btn--neutral js-popover-trigger" onClick={toggleParameters}>
              <svg className="o-icon o-icon--parameters">
                <use xlinkHref={SvgIconEnum.SETTINGS.url}></use>
              </svg>
            </AlphaButton>
          </li>}
          <li className="g-list__item">
            <button className={`o-btn o-btn--neutral o-btn--tooltip ${isRightPaneActive ? 'is-active' : ''} o-btn--tooltip-right`} type="button" aria-label="Toggle sidebar" onClick={() => toggleRightPane(selectedItems)}>
              <svg className="o-icon o-icon--sidebar">
                <use xlinkHref={SvgIconEnum.SIDEBAR.url}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps=(state: RootStore)=> ({
  childPopover: state.commonReducer.childPopover
});

export const GridOptionsConnected = connect(mapStateToProps, null) (GridOptions)