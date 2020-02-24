import * as React from 'react';
import {
  noop as _noop,
  map as _map,
  includes as _includes
} from 'lodash';
import * as InfiniteScroll from 'react-infinite-scroll-component';

import * as moment from 'moment';
import * as Popover from 'react-popover';
import AlphaButton from 'src/components/alphaButton/AlphaButton';
import AlphaCheckBox from 'src/components/alphaCheckBox/AlphaCheckBox';
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import TableView from './../tableView/TableView';
import Pagination from 'src/components/pagination/Pagination';
import CheckBox from 'src/components/checkBox/CheckBox';
// import CusHorizontalCard from '../CusHorizontalCard/cusHorizontalCard';
import { HorizontalCard } from './../horizontalCard/HorizontalCard';
import { formatMessage } from './../../common/translation/Translate';
import 'src/common/css/mockcss/style.css';

interface Props {
  toggleRightPane: (id: any) => void,
  addSelectedItems: (id: any) => void,
  selectedItems: any[],
  contentGridCheckBox?: boolean,
  records: any[],
  name: string,
  isTableView: boolean,
  availableFields: any,
  onPageChange: (pageNumber: any, maxRecordPerPage: any, orderField?: any, orderDirection?: any) => void,
  onSort: (orderField: string, orderDirection: string) => void,
  maxRecords: any,
  activePage: number,
  // Todo one of type to stable one type
  maxRecordPerPage: any,
  isIconView: boolean,
  hiddenFields: any,
  isRightPaneActive: boolean,
  recordsMetaInfo: any,
  infiniteScroll: boolean
}
interface State {
  pageNumber: number,
  tableViewPopUpStyle: string,
  name: string,
  creationUser: string,
  uid: string,
  priority: string,
  score: string,
  creationDtg: string,
  lastUpdateUser: string,
  lastUpdateDtg: string,
  assignTo: string,
  assignToGroup: string,
  dueDate: string,
  workflowStatusData: string,
  description: string,
  ruleName: string,
  organizationId: string,
  maxRecords: number,
  scrollHeight: number
}
export default class GridContent extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    toggleRightPane: _noop,
    addSelectedItems: _noop,
    selectedItems: [],
    contentGridCheckBox: false,
    name: 'AlphaButton',
    isTableView: false,
    maxRecords: 0
  }
  state = {
    pageNumber: 1,
    tableViewPopUpStyle: '',
    name: 'default',
    creationUser: 'default',
    uid: 'default',
    priority: 'default',
    score: 'default',
    creationDtg: 'default',
    lastUpdateUser: 'default',
    lastUpdateDtg: 'default',
    assignTo: 'default',
    assignToGroup: 'default',
    dueDate: 'default',
    workflowStatusData: 'default',
    description: 'default',
    ruleName: 'default',
    organizationId: 'default',
    maxRecords: 10,
    scrollHeight: 500
  }
  toggleMap = { default: 'asc', asc: 'desc', desc: 'default' }
  orderMap = { default: '', asc: 'is-asc', desc: 'is-desc' };
  title = [
    { id: 'description', label: 'NAME' }, { id: 'creationUser', label: 'CREATED BY' }, { id: 'uid', label: 'UID NUMBER' },
    { id: 'priority', label: 'PRIORITY' }, { id: 'score', label: 'SCORE' }, { id: 'creationDtg', label: 'CREATION DATE' },
    { id: 'lastUpdateUser', label: 'UPDATED BY' }, { id: 'lastUpdateDtg', label: 'LAST UPDATED DATE' }, { id: 'assignTo', label: 'ASSIGN TO' },
    { id: 'assignToGroup', label: 'ASSIGN TO GROUP' }, { id: 'dueDate', label: 'DUE DATE' }, { id: 'workflowStatusData', label: 'WORKFLOW STATUS' },
    { id: 'description', label: 'DESCRIPTION' }, { id: 'ruleName', label: 'RULE NAME' }, { id: 'organizationId', label: 'ORGANIZATION UNIT' }
  ];

  
  componentDidMount() {
    this.calcHeight();
    window.addEventListener('resize', () => this.calcHeight());
  }

  calcHeight = () => {
    const scrollHeight = document.getElementById('ow-container').clientHeight;
    this.setState({ scrollHeight });
  }

  private fetchMoreData = () => {
    this.setState({ maxRecords: this.state.maxRecords + 10 }, () => {
      this.props.onPageChange(0, this.state.maxRecords);
    })
  }

  private riskLevelColor = (riskLevel, score) => {
    switch (true) {
      case (riskLevel.severe < score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--severe';
      case (riskLevel.high < score && riskLevel.severe >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--high';
      case (riskLevel.elevated < score && riskLevel.high >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--elevated';
      case (riskLevel.guarded < score && riskLevel.elevated >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--guarded';
      default:
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--low';
    }
  }
  private priorityStatus = (priority) => {
    switch (priority) {
      case 0:
        return 'Low';
      case 1:
        return 'Medium';
      default:
        return 'High';
    }
  }
  private togglePaginate = (pageNumber) => {
    // NOTE : Actual api pagenumber and UI pagenumber differnt is 1 so here -1 is availed
    this.setState({ pageNumber: pageNumber - 1 }, () => 
       this.props.onPageChange(this.state.pageNumber, this.props.maxRecordPerPage)
    );
  }
  private tmpMap = (event: any) => {
    const key = event.target.id;
    const value = this.toggleMap[this.state[key]];
    this.setState({ [key]: value });
    this.props.onSort(key, value !== 'default' ? value : null);
  }
  private propertiesPopOver = () => {
    return (
      <div className={`c-popover js-popover is-ready`} data-container=".js-content__scrollable"
        style={{ left: '-140px' }}>
        <div className="c-popover__body">
          <div className="c-actions-list">
            <ul className="c-actions-list__list">
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('global.validate')}
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('global.properties')}
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('global.history')}
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('global.duplicate')}
                </button>
              </li>
              <li className="c-actions-list__item">
                <button className="o-btn o-btn--inline" type="button">
                  {formatMessage('global.delete')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { records, toggleRightPane, addSelectedItems, recordsMetaInfo,
      selectedItems, name, isRightPaneActive, hiddenFields, isIconView, isTableView, maxRecords,
      activePage, maxRecordPerPage, availableFields, infiniteScroll } = this.props;

    return (
      <React.Fragment>
        <div className="c-content__scrollable js-content__scrollable"  id="ow-container">
          {isIconView && infiniteScroll && <React.Fragment>
            <InfiniteScroll
              dataLength={records.length}
              next={this.fetchMoreData}
              hasMore={true}
              height={this.state.scrollHeight}
            >
              {records.map((each, i) => {
                return (
                  <HorizontalCard
                    key={i}
                    record={each}
                    recordsMetaInfo={recordsMetaInfo}
                    riskLevelStyle={each.orgUnitObj
                      ? this.riskLevelColor(each.orgUnitObj.riskLevel, each[recordsMetaInfo.riskLevelStyleBy])
                      : "c-horizontal-card__color-coding c-horizontal-card__color-coding--severe js-card-color"}
                    isSelected={_includes(selectedItems, each[recordsMetaInfo.selectionMadeBy])}
                    onSelect={addSelectedItems}
                    onClick={toggleRightPane}
                    onAction={this.propertiesPopOver} />
                )
              })}
            </InfiniteScroll>
          </React.Fragment>}
          {isIconView && !infiniteScroll &&<React.Fragment>
              {records.map((each, i) => {
                return (
                  <HorizontalCard
                    key={i}
                    record={each}
                    recordsMetaInfo={recordsMetaInfo}
                    riskLevelStyle={each.orgUnitObj
                      ? this.riskLevelColor(each.orgUnitObj.riskLevel, each[recordsMetaInfo.riskLevelStyleBy])
                      : "c-horizontal-card__color-coding c-horizontal-card__color-coding--severe js-card-color"}
                    isSelected={_includes(selectedItems, each[recordsMetaInfo.selectionMadeBy])}
                    onSelect={addSelectedItems}
                    onClick={toggleRightPane}
                    onAction={this.propertiesPopOver} />
                )
              })}
          </React.Fragment>}
          {isTableView && <TableView
            head={this.title}
            body={records}
            hiddenFields={hiddenFields}
            toggleRightPane={toggleRightPane}
            id={_map(this.title, (each, i) => this.orderMap[this.state[each.id]])}
            onClick={this.tmpMap}
            availableFields={availableFields} />}
        </div>
        { isTableView || !infiniteScroll && <Pagination
          maxRecords={+maxRecords}
          activePage={activePage}
          recordsPerPage={+maxRecordPerPage}
          onChange={this.togglePaginate} /> }
      </React.Fragment>
    );
  }
}