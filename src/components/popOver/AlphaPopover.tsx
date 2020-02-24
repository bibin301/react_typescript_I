import * as React from 'react';
import { noop as _noop } from 'lodash';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
// import onClickOutside from 'react-onclickoutside';

interface Props extends InjectedOnClickOutProps {
  hidePopOver: () => void,
}

class Popover extends React.Component<Props, null> {
  handleClickOutside(event) {
    this.props.hidePopOver();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export const AlphaPopover = onClickOutside(Popover);


