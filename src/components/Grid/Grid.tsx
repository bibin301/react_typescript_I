import * as React from 'react';
import { isEmpty as _isEmpty,
  difference as _difference,
  remove as _remove,
  noop as _noop } from 'lodash';

import { formatMessage } from './../../common/translation/Translate';
import { GridOptionsConnected } from './GridOptions';
import GridContent from './GridContent';

import 'src/common/css/mockcss/style.css';
import '../../common/css/owncss/style.css';


interface Props {
  records: any[],
  toggleRightPane: ()=> void,
  onSort?: (orderField: string, orderDirection: string)=> void,
  onPageChange?: (pageNumber: any, maxRecordPerAlertPage: any, orderField?: any, orderDirection?: any)=> void,
  toggleParameters?: ()=> void,
  activePage?: number,
  maxRecords?: number,
  // Todo one of type to stable one type
  maxRecordPerPage?: number | string,
  filterPopover: () => JSX.Element,
  sortPopover: () => JSX.Element,
  displayPopover: () => JSX.Element,
  hiddenFields?: any,
  isRightPaneActive: boolean,
  name?: string,
  closeRightPane: any,
  availableFields?: any,
  recordsMetaInfo: any,
  infiniteScroll?: boolean
}

interface State {
  isTableView: boolean,
  isIconView: boolean,
  selectedItems: any[]
}
export default class Grid extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    toggleRightPane: _noop,
    toggleParameters: _noop,
    onPageChange: _noop,
    hiddenFields: {},
    isRightPaneActive: false,
    name: '',
    infiniteScroll: false
  }

  state = {
    isTableView: false,
    isIconView: true,
    selectedItems: []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.records !== this.props.records) {
      this.setState({ selectedItems: [] });
    }
  }

  private toggleTableView = () => {
    this.setState({ isTableView: true }, ()=> this.setState({ isIconView: false }))
  }
  private toggleIconView = () => {
    this.setState({ isIconView: true }, ()=> this.setState({ isTableView: false }))
  }
  private addSelectedItems = (item: any) => {
    let selectedItems = this.state.selectedItems;
    let currentItem = [item];
    if (_isEmpty(selectedItems)) {
      selectedItems.push(item);
      this.setState({ selectedItems: selectedItems });
    } else {
      let diff = _difference(currentItem, selectedItems);
      if (!_isEmpty(diff)) {
        selectedItems.push(item);
        this.setState({ selectedItems: selectedItems });
      } else {
        _remove(selectedItems, (each) => {
          return item === each;
        })
        this.setState({ selectedItems: selectedItems });
      }
    }
  }

  public render() {
    const { selectedItems, isIconView, isTableView } = this.state;
    const { records, toggleRightPane, toggleParameters, name, isRightPaneActive, hiddenFields,
      onSort, maxRecordPerPage, recordsMetaInfo, infiniteScroll,
      activePage, maxRecords, onPageChange, filterPopover,
      closeRightPane, availableFields, sortPopover, displayPopover } = this.props;
    
    if (_isEmpty(records)) {
      return (
        <div className="no-more-alert">
          {formatMessage('global.noMoreData')}
        </div>
      );
    }

    return (
      <div className="c-content__inner-wrapper ow__overflow-scroll">
        <GridOptionsConnected
          maxRecordPerPage={maxRecordPerPage}
          onPageChange={onPageChange}
          selectedItems={selectedItems}
          toggleRightPane={toggleRightPane}
          toggleParameters={toggleParameters}
          filterPopover={filterPopover}
          sortPopover={sortPopover}
          displayPopover={displayPopover}
          toggleTableView={this.toggleTableView}
          toggleIconView={this.toggleIconView}
          isTableView={isTableView}
          isRightPaneActive={isRightPaneActive}
          closeRightPane={closeRightPane} />
        <GridContent
          recordsMetaInfo={recordsMetaInfo}
          maxRecordPerPage={maxRecordPerPage}
          onSort={onSort}
          onPageChange={onPageChange}
          toggleRightPane={toggleRightPane}
          records={records}
          addSelectedItems={this.addSelectedItems}
          selectedItems={selectedItems}
          name={name}
          isRightPaneActive={isRightPaneActive}
          hiddenFields={hiddenFields}
          isIconView={isIconView}
          isTableView={isTableView}
          maxRecords={maxRecords}
          activePage={activePage}
          availableFields={availableFields}
          infiniteScroll={infiniteScroll} />
      </div>
    )
  }
}
