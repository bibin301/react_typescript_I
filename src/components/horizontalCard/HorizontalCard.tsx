import * as React from 'react';
import { render } from 'react-dom';
import CheckBox from './../checkBox/CheckBox'
import * as Popover from 'react-popover';
import * as  moment from 'moment';

interface Props {
  scenarioName?: string,
  uid?: string,
  score?: string,
  priority?: string,
  dueDate?: string,
  riskLevelStyle: string,
  priorityStyle?: string,
  isSelected: boolean,
  onSelect: (uid: any) => any,
  onClick: (uid: any) => any,
  onUIDClick?: () => any,
  onAction: () => JSX.Element,
  recordsMetaInfo: any,
  record: any,
}

interface State {
  isOptionVisible: boolean
}

  export class HorizontalCard extends React.Component<Props, State> {
  state = {
    isOptionVisible: false
  }

  private toggleOptionVisibility = () => {
    this.setState({ isOptionVisible: !this.state.isOptionVisible })
  }
  private getContent = (ref) => {
    const { record } = this.props;
    if (ref.type === 'date') {
      return ref.availableFormat === 'timestamp'
        ? moment.unix(record[ref.name]).format(ref.expectedFormat)
        : moment(record[ref.name], ref.availableFormat).format(ref.expectedFormat);
    } else if (ref.getName) {
      return ref.getName(record[ref.name]);
    }
    return record[ref.name];
  }
  private getStyle = (ref) => {
    const { record } = this.props;
    if (ref.getStyle !== undefined || ref.getStyle) {
      return ref.getStyle(record[ref.name]);
    }
    return 'c-horizontal-card__data-value';
  }

  public render() {
    const { scenarioName, uid, score, priority, dueDate, onClick, isSelected, onSelect, onUIDClick,
      priorityStyle, riskLevelStyle, onAction, recordsMetaInfo, record } = this.props;

    const listWidth = `calc(100% /${recordsMetaInfo.records.length})`;

    return (
      <div className="c-horizontal-card js-horizontal-card" data-alert="alert1">
        <ul className="c-horizontal-card__data js-card-data" onClick={() => onClick(record[recordsMetaInfo.selectionMadeBy])}>
          <span className={riskLevelStyle} aria-label="Risk level"></span>
          <li className={this.getStyle(recordsMetaInfo.records[0])}
            style={{ width: listWidth }} title="Bank on watchlist" aria-label="Title">
            <CheckBox name={record[recordsMetaInfo.selectionMadeBy]} label=''
              checked={isSelected}
              onChange={() => onSelect(record[recordsMetaInfo.selectionMadeBy])} />
            <p className="c-horizontal-card__label">
              {this.getContent(recordsMetaInfo.records[0])}
            </p>
          </li>
          <li className={this.getStyle(recordsMetaInfo.records[1])}
            style={{ width: listWidth }} id={record[recordsMetaInfo.records[1].name]} aria-label="Reference"
            onDoubleClick={recordsMetaInfo.records[1].onDoubleClick}>
            <span className="o-badge c-horizontal-card__badge" id={record[recordsMetaInfo.records[1].name]}>
              {this.getContent(recordsMetaInfo.records[1])}
            </span>
          </li>
          <li className={this.getStyle(recordsMetaInfo.records[2])}
            style={{ width: listWidth }}
            title={this.getContent(recordsMetaInfo.records[2])} aria-label="Rating">
            {this.getContent(recordsMetaInfo.records[2])}
          </li>
          <li className={this.getStyle(recordsMetaInfo.records[3])}
            title={this.getContent(recordsMetaInfo.records[3])}
            style={{ width: listWidth }} aria-label="Priority">
            {this.getContent(recordsMetaInfo.records[3])}
          </li>
          {recordsMetaInfo.records.length > 4 && <li className={this.getStyle(recordsMetaInfo.records[4])}
            style={{ width: listWidth }}
            title={this.getContent(recordsMetaInfo.records[4])} aria-label="Creation date">
            {this.getContent(recordsMetaInfo.records[4])}
          </li>}
          {recordsMetaInfo.records.length > 5 && <li className={this.getStyle(recordsMetaInfo.records[5])}
            style={{ width: listWidth }}
            title={this.getContent(recordsMetaInfo.records[5])} aria-label="Creation date">
            {this.getContent(recordsMetaInfo.records[5])}
          </li>}
          {recordsMetaInfo.records.length > 6 && <li className={this.getStyle(recordsMetaInfo.records[6])}
            style={{ width: listWidth }}
            title={this.getContent(recordsMetaInfo.records[6])} aria-label="Creation date">
            {this.getContent(recordsMetaInfo.records[6])}
          </li>}
          {recordsMetaInfo.badge && <li className="c-horizontal-card__tag" aria-label="Status">
            <span className={recordsMetaInfo.badge.getStyle
              ? recordsMetaInfo.badge.getStyle(record[recordsMetaInfo.badge.name])
              : `  u-positive`}>
              {this.getContent(recordsMetaInfo.badge)} {/* todo */}
            </span>
          </li>}
        </ul>
        <Popover
          isOpen={this.state.isOptionVisible}
          body={onAction()}
          place='below'
          onOuterAction={() => this.setState({ isOptionVisible: false })} >
          <button className="o-more-btn c-horizontal-card__more-btn o-more-btn--thin js-popover-trigger" type="button" onClick={this.toggleOptionVisibility}>
            <span className="u-visually-hidden">Actions</span>
          </button>
        </Popover>
      </div>
    );
  }
}
