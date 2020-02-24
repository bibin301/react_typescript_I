import * as React from 'react';
import {
  pick as _pick,
  values as _values,
  assign as _assign,
  map as _map
} from 'lodash';
import * as Popover from 'react-popover';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import RiskAllocation from './../riskAllocation/RiskAllocation';
import { formatMessage } from './../../common/translation/Translate';

import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

import 'src/common/css/mockcss/style.css';

// Note: value of low is no need to RiskAllocation comp
const riskLevelAlert = [
  // 'low',
  'guarded', 'elevated', 'high', 'severe'];
const riskLevelFlag = [
  // 'overallRiskLow',
  'overallRiskGuarded', 'overallRiskElevated', 'overallRiskHigh', 'overallRiskSevere'];

interface Props {
  toggleBtnGrp?: () => void,
  gridCardProperties: boolean,
  gridCardMenu: (index) => void,
  toggleRisksVisible?: (riskLevel: any, id: any, name: any) => void,
  contentGridCheckBox?: boolean,
  adminDataList: any[],
  actionItems: any,
  gridIndex: number,
  label: string,
  description?: string,
  svgIcon: any,
  isRisk?: boolean
}

interface State {
}

export default class GridCardContent extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    gridCardProperties: false,
    contentGridCheckBox: false
  }

  render() {
    const { gridCardProperties, gridCardMenu, adminDataList, toggleRisksVisible, isRisk,
       actionItems, gridIndex, label, description, svgIcon } = this.props;

    const isContentMenuVisible = gridCardProperties ? '' : 'is-hidden';
    const hidePopOver = () => {
      this.props.gridCardMenu(0);
    }
    const propertiesPopOver = (list) => (
      <div className='c-popover js-popover is-ready ow-popleft' data-container=".js-content__scrollable">
        <div className="c-popover__body">
          <div className="c-actions-list">
            <ul className="c-actions-list__list">
              {_map(actionItems, (item, index) => {
                return (
                  <li className="c-actions-list__item" key={index}>
                    <button className="o-btn o-btn--inline" type="button" 
                      onClick={()=> {
                        item.onClick(list.id);
                        hidePopOver();
                      }}>
                      {formatMessage(`global.${item.label}`)}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )

    return (
      <div className="c-content__scrollable js-content__scrollable">
        {_map(adminDataList, (item, i) =>
          <div className="c-row-card js-row-card" key={i}>
            <div className="c-row-card__toggle-wrapper">
              <fieldset className="o-toggle Array">
                <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="Alert" value="1" />
                <label className="o-toggle__label" htmlFor="Alert">
                </label>
              </fieldset>
              <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg" ><title>Risk</title><use xlinkHref={svgIcon}></use></svg></div>
            </div>
            <div className="c-row-card__content">
              <p className="c-row-card__label">{item[label]}</p>
              <p className="c-row-card__name">{item[description]}</p>
            </div>
            {
              isRisk && <div className="c-row-card__risk" onClick={() => {
                toggleRisksVisible(_assign({}, item.riskLevel), item.id, item.name)
              }}>
                <RiskAllocation varients='static' defaultValue={_values(_pick(item.riskLevel, riskLevelAlert))} />
                <RiskAllocation varients='static' defaultValue={_values(_pick(item.riskLevel, riskLevelFlag))} />
              </div>
            }
            <Popover
              preferPlace='start'
              place='below'
              style={{ left: '30px' }}
              isOpen={gridCardProperties && gridIndex === i}
              body={propertiesPopOver(item)}
              onOuterAction={hidePopOver}
              key={i}>
              <AlphaButton className="o-more-btn c-row-card__more-btn" onClick={() => {
                gridCardMenu(i);
              }}>
                <span className="u-visually-hidden">Actions</span>
              </AlphaButton>
            </Popover>

          </div>
        )}
      </div>
    )
  }
}
