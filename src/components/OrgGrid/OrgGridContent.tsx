import * as React from 'react';
import { noop as _noop, map as _map } from 'lodash';
import * as Popover from 'react-popover';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

import 'src/common/css/mockcss/style.css';


interface gridProps {
  toggleBtnGrp?: ()=> void,
  gridCardProperties: boolean,
  gridCardMenu: ()=> void,
  contentGridCheckBox?: boolean,
  isGrandChildVisible?: boolean,
  isOrgUnit?: boolean,
  optionItems: any,
  adminDataList?: any[]
}
interface gridState {
  popUpStyle: number,
  isMoreAction: boolean,
  isMoreActionID: number,
  isChildVisible: boolean
}

export default class OrgGridContent extends React.Component<gridProps, gridState> {
  state = {
    popUpStyle: null,
    isMoreAction: false,
    isMoreActionID: null,
    isChildVisible: false
  }

  public static defaultProps: Partial<gridProps> ={
    toggleBtnGrp: _noop,
    gridCardProperties: false,
    gridCardMenu: _noop,
    isGrandChildVisible: false,
    contentGridCheckBox: false,
    isOrgUnit: false,
    adminDataList: []
  }

  private toggleMoreAction = (index: number = null) => {
    this.setState((prevState, props) => { 
      return { isMoreAction: !prevState.isMoreAction, isMoreActionID: index }
    });
  }

  private propertiesPopover = (list) => {
    return (
      <div className={`c-popover js-popover is-ready`} style={{left: '-155px'}}>
        <div className="c-popover__body">
          <div className="c-actions-list">
            <ul className="c-actions-list__list">
            {_map(this.props.optionItems, (item, index) => {
                return (
                  <li className="c-actions-list__item" key={index}>
                    <button className="o-btn o-btn--inline" type="button" 
                      onClick={()=> {
                        item.onClick(list.id);
                        // hidePopOver();
                      }}>
                      {formatMessage(`global.${item.label}`)}
                    </button>
                  </li>
                )})}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  render() {

    return (
      <div className="c-content__scrollable js-content__scrollable" onScroll={()=> this.setState({ isMoreAction: false })}>
        {_map(this.props.adminDataList, (item, i) =>
          (<div key={i}>
            <div className={item.children.length > 0 ? 'c-con' : 'c-row-card js-row-card'}>
              <div className="c-row-card__toggle-wrapper">
                <fieldset className="o-toggle Array">
                  <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="Alert" value="1" />
                  <label className="o-toggle__label" htmlFor="Alert">
                  </label>
                </fieldset>
                <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><use xlinkHref={SvgIconEnum.STRUCTUREMEDIUM.url}></use></svg>
                </div>
              </div>
              <div className="c-row-card__content">
                <p className="c-row-card__label">{item.name}</p>
                <p className="c-row-card__name">{item.children.length && item.parents.length ? "Parent / Child": item.children.length ? "Parent" : item.parents.length ? "Child" : "" }</p>
              </div>
              {/* TODO : Enhancement */}
              {/* <span className="o-badge u-positive c-row-card__badge">
                validated
              </span> */}
              <Popover
                isOpen={this.state.isMoreAction && this.state.isMoreActionID === i}
                body={this.propertiesPopover(item)}
                place='below'
                tipSize={0.02}
                onOuterAction={() => this.setState({ isMoreAction: false })} >
                <AlphaButton className="o-more-btn c-row-card__more-btn" onClick={() => {
                  this.toggleMoreAction(i);
                }
                }>
                  <span className="u-visually-hidden">Actions</span>
                </AlphaButton>
              </Popover>
            </div>
            {item.children.length > 0 && <div className="c-row-card-org">
              {_map(item.children, (child, i) => (
                  <div key={i} className="c-entity en1">
                    <div className="c-entity__icon">
                      <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                        <title> Combined Shape</title>
                        <use xlinkHref={SvgIconEnum.STRUCTUREMEDIUM.url}></use>
                      </svg>
                    </div>
                    <p className="c-entity__label">
                      {child.name}
                    </p>
                    <div className="c-entity__controls">
                      <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button">
                      <span className="u-visually-hidden">Actions</span>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
            }
            )}
          </div>)
        )}
      </div>
    );
  }
}
