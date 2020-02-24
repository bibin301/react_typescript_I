import * as React from 'react';
import { map as _map, noop as _noop, isArray as _isArray } from 'lodash';
import * as Popover from 'react-popover';
import { FormattedMessage } from 'react-intl';
// Fix: formatMessage missing props..
import { formatMessage } from './../../common/translation/Translate';
import { SVG_PATH } from '../../constants';

const defaultProperties = [{
  property: <FormattedMessage id={ 'global.properties' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.rename' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.duplicate' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.delete' } />,
  actionOnClick: _noop
}]

interface Props {
  id: string,
  icon?: string,
  label: string,
  badge?: string,
  name: string,
  onAction?: (id: string | number) => void,
  customProperties?: any[],
  fetchAttribute?: (id: string | number) => void,
  cardIndex?: number | string,
  moreActionDisabled?: boolean
}

interface State {     
   isOptionVisible: boolean
}
export default class CusRowCard extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    icon: 'folder',
    label: '',
    badge: '',
    name: '',
    onAction: _noop,
    customProperties: [],
    fetchAttribute: _noop,
    cardIndex: null,
    moreActionDisabled: false
  };

  state = { isOptionVisible: false }

  renderSvg = () => {
    return (
      <svg className="o-icon o-icon--rules o-icon--prepended" width="14" height="14" viewBox="0 0 14 14">
        <title>{this.props.icon}</title>
        {_isArray(SVG_PATH[this.props.icon])
          ? _map(SVG_PATH[this.props.icon],
            (item, i) => (<path key={i} d={item} />))
          : <path d={SVG_PATH[this.props.icon]} />}
      </svg>
    );
  }

  private hideOption = () => {
    this.setState({ isOptionVisible: false })
  }

  private toggleOption = () => {
    this.setState({ isOptionVisible: !this.state.isOptionVisible });
  }

  private handleAction = () => {
    this.props.onAction(this.props.id);
  }
  render() {
    const { customProperties, fetchAttribute, cardIndex, moreActionDisabled } = this.props;
    const allProperties = customProperties.length ? customProperties : defaultProperties;

    return (
      <div className="c-row-card js-row-card" onDoubleClick={this.handleAction}>
        <div className="c-row-card__toggle-wrapper">
          <fieldset className="o-toggle ">
            <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="" value="1" />
            <label className="o-toggle__label" htmlFor="">
              <span className="u-visually-hidden">
                Data source language
              </span>
            </label>
          </fieldset>
          {this.renderSvg()}
        </div>
        <div className="c-row-card__content" >
          <p className="c-row-card__label">
            {this.props.label}
          </p>
          <p className="c-row-card__name">
            {this.props.name && this.props.name.slice(0, 50)}
          </p>
          {this.props.badge && <span className="o-badge u-positive c-row-card__badge">
            {this.props.badge}
          </span>}
        </div>
        {!moreActionDisabled && <Popover isOpen={this.state.isOptionVisible}
          place='below'
          tipSize={0.01}
          onOuterAction={this.hideOption}
          body={
            <div className="c-popover">
              <div className="c-popover__body">
                <div className="c-actions-list">
                  <ul className="c-actions-list__list">
                    {_map(allProperties, (item, index) => {
                      return (
                        <li className="c-actions-list__item" key={index} onClick={() => {
                          item.actionOnClick();
                          fetchAttribute(cardIndex);
                        }}>
                          <span className="o-btn o-btn--inline js-row-card-switch">
                            {item.property}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>}>

          <button className="o-more-btn c-row-card__more-btn o-more-btn--thin js-popover-trigger"
            type="button" onClick={this.toggleOption}>
            <span className="u-visually-hidden">Actions</span>
          </button>
        </Popover>}
      </div>
    );
  }
}
