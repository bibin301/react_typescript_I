import * as React from 'react';
import *as Popover from 'react-popover';


interface Props {
  icon: any,
  optionElement: any,
  label: string
}

interface State {
  optionIsVisible: boolean
}

export default class Entity extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    label: ''
  };

  state = {
    optionIsVisible: false
  }

  toggleOptionIsVisiblity = () => {
    this.setState({ optionIsVisible: !this.state.optionIsVisible })
  }

  hideOption = () => {
    this.setState({ optionIsVisible: false })
  }

  render() {
    const { icon, label, optionElement } = this.props;
    return (
      <div className="c-entity">
        <div className="c-entity__icon">
          {icon}
        </div>
        <p className="c-entity__label">
          {label}
        </p>
        <div className="c-entity__controls">
          <Popover
            isOpen={this.state.optionIsVisible}
            tipSize={0.01}
            className={'ow-popoverIndex'}
            onOuterAction={this.hideOption}
            enterExitTransitionDurationMs={10}
            body={optionElement}>
            <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button"
              onClick={this.toggleOptionIsVisiblity}>
              <span className="u-visually-hidden">Actions</span>
            </button>
          </Popover>
        </div>
      </div>);
  }
}
