import * as React from 'react';
import { noop as _noop, isEmpty as _isEmpty } from 'lodash';

import GridCardOptions from './GridCardOptions';
import GridCardContent from './GridCardContent';
import { formatMessage } from './../../common/translation/Translate';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

interface Props {
  toggleRisksVisible?: (riskLevel: any, id: any, name: any) => void,
  adminDataList: any[],
  addButton?: any,
  optionItems: any,
  actionItems: any,
  label: string,
  description?: string,
  svgIcon: any,
  isRisk?: boolean,
  onClick?: any
}
interface State {
  gridCardProperties: boolean,
  gridIndex: number
}
export default class GridCard extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    addButton: ''
  }
  state = {
    gridCardProperties: false,
    gridIndex: 0
  }

  render() {
    const { gridCardProperties, gridIndex } = this.state;
    const { adminDataList, toggleRisksVisible, addButton, optionItems, svgIcon,
      actionItems, label, description, isRisk, onClick } = this.props;

    if (_isEmpty(adminDataList)) {
      return (
        <div className="no-more-alert">
          {formatMessage('global.noMoreItem')}
        </div>
      )
    }

    const gridCardMenu = (i) => {
      this.setState({ gridCardProperties: !this.state.gridCardProperties, gridIndex: i });
    }
    return (
      <div className="c-content__inner-wrapper">
        <GridCardOptions
          addButton={addButton}
          optionItems={optionItems}
          onClick={onClick} />
        <GridCardContent
          adminDataList={adminDataList}
          gridCardProperties={gridCardProperties}
          gridIndex={gridIndex}
          gridCardMenu={gridCardMenu}
          toggleRisksVisible={toggleRisksVisible}
          svgIcon={svgIcon}
          actionItems={actionItems}
          label={label}
          isRisk={isRisk}
          description={description} />
      </div>
    )
  }
}
