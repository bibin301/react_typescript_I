import * as React from 'react';
import { formatMessage } from './../../../common/translation/Translate';

import { Props } from './Related';

interface dataProps {
  formatMessage: string,
  content: Array<string>
}

interface dataState {
  active: boolean
}

class DataButtonPanel extends React.Component<dataProps, dataState> {
  constructor(props: dataProps) {
    super(props);
    this.state = {active: false};
    this.buttonFunctionExpand = this.buttonFunctionExpand.bind(this);
  }

  buttonFunctionExpand() {
    this.setState({active: !this.state.active});
  }

  render() {
    const active = this.state
    return (
      <React.Fragment>
        <button className="c-explorer__item js-explorer-item" type="button" onClick={this.buttonFunctionExpand}>{formatMessage(this.props.formatMessage)}</button>
        {this.props.content.map(function (each, i) {
          return (<span key={i} className={this.state.active? "c-explorer__item" : "c-explorer__item is-hidden"}>{each}</span>)
        }, this)}
      </React.Fragment>
    )
  }
}

const data: React.SFC<Props> = (props) => {
  return (
    <nav className="c-explorer">
      <DataButtonPanel formatMessage={'global.users'} content={['need to pass', 'a correct prop']}/>
      <DataButtonPanel formatMessage={'global.groups'} content={['a', 'b']}/>
      <DataButtonPanel formatMessage={'global.roles'} content={['a', 'b']}/>
      <DataButtonPanel formatMessage={'global.orgunits'} content={['a', 'b']}/>
      <DataButtonPanel formatMessage={'global.risks'} content={['a', 'b']}/>
    </nav>
  )
}

export default data;
