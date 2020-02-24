import * as React from 'react';
import { noop as _noop, map as _map } from 'lodash';
import * as Popover from 'react-popover';
import { connect } from 'react-redux';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';
import { RootStore } from '../../store/rootReducer';

import 'src/common/css/mockcss/style.css';

interface Props {
  addButton: any,
  optionItems: any,
  childPopover?: boolean,
  onClick?: any
  
}

interface IntState {
  isSortVisible: boolean,
  isFilterVisible: boolean
}

class GridCardOptions extends React.Component<Props, IntState> {
  public static defaultProps: Partial<Props> = {
    addButton: ''
  }
  state = {
    isSortVisible: false,
    isFilterVisible: false
  }
 
  render() {
  const { addButton, optionItems, childPopover, onClick } = this.props;

  return (
    <div className="c-content__actions">
      {(addButton && <button className="o-btn o-btn--primary" type="button"  onClick={onClick} style={{ top: '15px' }}>
        {addButton}
      </button>)}
      
      <ul className="g-list g-list--spacing g-list--inline">
      {_map(optionItems, (item, index) => {
        return(
          <li className="g-list__item" key={index}>
            {!item.multiButton
            ? (item.popover
              ? <Popover
                  isOpen={item.label==='sort' ? this.state.isSortVisible : this.state.isFilterVisible}
                  body={item.popover()}
                  onOuterAction={() => item.label==='sort' 
                    ? this.setState({ isSortVisible: false })
                    : !childPopover && this.setState({ isFilterVisible: false })}
                  tipSize={0.02}
                  place='below' >
                  <AlphaButton className={`o-btn o-btn--neutral js-popover-trigger  o-btn ${(item.label==='sort' ? this.state.isSortVisible : this.state.isFilterVisible) ? 'has-popover-displayed' : '' }`}
                    onClick={() => { 
                      item.label==='sort' 
                    ? this.setState({ isSortVisible: true })
                    : this.setState({ isFilterVisible: true });
                      item.action}}>
                    <svg width="14px" height="12px" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                      <use xlinkHref={item.svg}></use>
                    </svg>
                      {item.label && formatMessage(`global.${item.label}`)}
                  </AlphaButton>
                </Popover>
              : <AlphaButton className={`o-btn o-btn--neutral js-popover-trigger  o-btn ${item.highLight ? 'has-popover-displayed' : '' }`} onClick={item.action}>
                    <svg width="14px" height="12px" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                      <use xlinkHref={item.svg}></use>
                    </svg>
                      {item.label && formatMessage(`global.${item.label}`)}
                  </AlphaButton>)
            : <div className="c-multi-btn">
              <AlphaButton className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger" onClick={item.action}>
                <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                  <title>Combined Shape</title>
                  <use xlinkHref={item.svg}></use>
                </svg>
              </AlphaButton>
              <AlphaButton className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger" onClick={item.action1}>
                <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                  <title>Combined Shape</title>
                  <use xlinkHref={item.svg1}></use>
                </svg>
              </AlphaButton>
            </div>}
          </li>);
      })}
      </ul>
    </div>
  );
}
}

const mapStateToProps=(state: RootStore)=> ({
  childPopover: state.commonReducer.childPopover
});

export default connect(mapStateToProps, null)(GridCardOptions)
