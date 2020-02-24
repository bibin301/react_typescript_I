import * as React from 'react';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import { userMenuOpen } from './../../service/common/action';

interface Props extends InjectedOnClickOutProps {
  userMenuOpened: boolean
}

interface State {
}

class PopOver extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleClickOutside(event: any) {
    this.toggle();
  }

  toggle() {
    userMenuOpen();
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default onClickOutside<{}>(PopOver);
