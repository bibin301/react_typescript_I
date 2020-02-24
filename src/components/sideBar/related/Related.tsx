import * as React from 'react';
import { formatMessage } from './../../../common/translation/Translate';
import visibleTabEnum from './../../../constants/SidebarEnum';
import navEnum from './../../../constants/NavEnum';
import dashboard from './RelatedDashboard';
import data from './RelatedData';

export interface Props {
  visibleTab: visibleTabEnum,
  toggleRpPopOver?: any, //TODO
  rightPanelData?: RightPanelData,
  menuSelected: navEnum
}

interface RightPanelData {
  alertedCount?: number,
  alertedList?: Array<Entity>,
  entityCount?: number,
  entityList?: Array<Entity>,
  eventCount?: number,
  eventList?: Array<Entity>,
  transactionCount?: number,
  transactionList?: Array<Entity>,
  documentCount?: number,
  documentList?: Array<Entity>,
  linkChartCount?: number,
  linkChartList?: Array<Entity>
}

export interface Entity {
  formattedFullName?: string,
  name: string
}

interface State {
}

export class Related extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={`c-tabs__item js-tabs-content ${this.props.visibleTab === visibleTabEnum.RELATED ? 'is-active' : ''}`}>
        <nav className="c-explorer">
          {(this.props.menuSelected === navEnum.DASHBOARD) && dashboard(this.props)}
          {(this.props.menuSelected === navEnum.DATA) && data(this.props)}
        </nav>
      </div>

    )
  }
}
