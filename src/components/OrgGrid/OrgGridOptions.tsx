import * as React from 'react';
import{ noop as _noop } from 'lodash';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { formatMessage } from './../../common/translation/Translate';
import 'src/common/css/mockcss/style.css';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';


interface Props {
  addAction: any,
  addButton: any
}

const OrgGridOptions: React.SFC<Props> = (props) => {
  const { addButton, addAction } = props;

  return (
    <div className="c-content__actions">
      {(addButton && <button className="o-btn o-btn--primary" type="button" style={{ top: '15px' }} onClick={addAction}>
        {addButton}
      </button>)}
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
  );
}


OrgGridOptions.defaultProps = {
  addButton: ''
}

export default OrgGridOptions;
