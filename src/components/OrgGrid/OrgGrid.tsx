import * as React from 'react';
import { noop as _noop, isEmpty as _isEmpty } from 'lodash';

import OrgGridOptions from './OrgGridOptions';
import OrgGridContent from './OrgGridContent';
import { formatMessage } from './../../common/translation/Translate';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

interface Props {
  adminDataList: any[],
  isOrgUnit: boolean,
  optionItems: any,
  addAction: () => void,
  addButton: any
}

interface State {
  gridCardProperties: boolean
}

export default class OrgGrid extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    isOrgUnit: false,
    addButton: ''
  }

  state = {
    gridCardProperties: false
  }

  render() {
    const { gridCardProperties } = this.state;
    const { adminDataList, addButton, addAction, isOrgUnit, optionItems } = this.props;

    if (_isEmpty(adminDataList)) {
      return (
        <div className="no-more-alert">
          {formatMessage('global.noMoreItem')}
        </div>
      )
    }
    const gridCardMenu = () => {
      this.setState({ gridCardProperties: !this.state.gridCardProperties });
    }
    return (
      <div className="c-content__inner-wrapper">
        <OrgGridOptions
          addAction={addAction}
          addButton={addButton} />
        <OrgGridContent
          optionItems={optionItems}
          adminDataList={adminDataList}
          gridCardProperties={gridCardProperties}
          gridCardMenu={gridCardMenu}
          isOrgUnit={isOrgUnit}/>
      </div >
    )
  }
}
