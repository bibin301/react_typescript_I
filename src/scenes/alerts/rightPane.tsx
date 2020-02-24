import * as React from 'react';
import * as  moment from 'moment';

import {
  map as _map, isEmpty as _isEmpty, filter as _filter, isArray as _isArray,
  includes as _includes, noop as _noop
} from 'lodash';

import Attribute from 'src/components/attribute/Attribute';
import Accordion from 'src/components/accordion/Accordion';
import Entity from './../../components/entity/Entity';
import { formatMessage } from './../../common/translation/Translate';
import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props {
  rightPaneHistoryFetch: any,
  allRightPaneHistoryData: any,
  isActive: boolean,
  allRightPaneRelatedData: any,
  onFileDownload: any,
  onFileUpload: any,
  rightPaneDetails: any,
  userId: any,
  availableLists: any,
  commentsLength: any,
  onCommentModal: any,
  onDescPopover: any,
  allAlertList: any,
  selectedEntityList: any,
  rightPaneRelatedFetch: any
};

interface State {
  visibleTab: string
}

export default class RightPane extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    rightPaneDetails: {},
    rightPaneHistoryFetch: _noop,
    isActive: false
  };

  state = { visibleTab: 'Related' };

  handleDownload = (filePath) => {
    this.props.onFileDownload(filePath);
  }

  handleUpload = (event) => {
    const { onFileUpload, rightPaneDetails, userId, availableLists } = this.props;

    onFileUpload(rightPaneDetails.uid, event.target.files[0], userId, availableLists);
  }

  changeVisibility = (event) => {
    this.setState({ visibleTab: event.target.name });
  }

  rpRelatedPopOver = () => (
    <div className={`c-popover js-popover is-ready`} style={{ left: '-140px' }} >
      <div className="c-actions-list">
        <ul className="c-actions-list__list">
          <li className="c-actions-list__item">
            <button className="o-btn o-btn--inline" type="button">
              {formatMessage('alert.sentToAnalysis')}
            </button>
          </li>
          <li className="c-actions-list__item">
            <button className="o-btn o-btn--inline" type="button">
              {formatMessage('alert.proprieties')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  renderDetails = () => {
    const { rightPaneDetails, allRightPaneRelatedData, commentsLength, onCommentModal } = this.props;
    const basicInfo = [
      { term: 'Score', value: rightPaneDetails.score },
      { enableAttention: true, term: 'Priority', value: rightPaneDetails.priority },
      { term: 'Date', value: rightPaneDetails.createdOn },
      { term: 'Status', value: rightPaneDetails.workflowStatusDescription }
    ]

    return (
      <div className={`c-tabs__item js-tabs-content ${this.state.visibleTab === 'Details' ? 'is-active' : ''}`}>
        <Attribute state="default" variants="inline" term="UID-System" value={rightPaneDetails.uid}></Attribute>
        <Attribute state="default" variants="inline" term="Name" value={rightPaneDetails.name}></Attribute>
        <Attribute state="default" variants="inline" term="Rule Name" value={rightPaneDetails.listId}></Attribute>
        <Attribute state="default" variants="truncated" term="Description" callback={this.props.onDescPopover} value={rightPaneDetails.description}></Attribute>
        <Attribute state="default" variants="default" term="Information" value={rightPaneDetails.information}></Attribute>
        <Accordion title="Basic informations">
          <div>
            {_map(basicInfo, (item, i) => (
              <Attribute key={i} state="default" variants="inline" enableAttention={item.enableAttention} term={item.term} value={item.value}></Attribute>
            ))}
          </div>
        </Accordion>
        <Accordion title="Events">
          {/* Todo: need requirement */}
        </Accordion>
        <Accordion title="Attachments">
          <div>
            {_map(allRightPaneRelatedData.documentList, (item, i) => (
              <Attribute key={i} variants='inline-icon' maxValue={25} term={item.documentName} refValue={item.orginalFilePath}
                onClick={this.handleDownload} />
            ))}
            <div className="upload-btn-wrapper">
              <button className="o-btn o-btn--neutral o-btn has-popover-displayed ow-expand">Upload a file</button>
              <input placeholder='upload' type='file' onChange={this.handleUpload} />
            </div>
          </div>
        </Accordion>
        <div>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn o-btn--primary" type="button">
            {formatMessage('alert.analysis')}
          </button>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn u-accent-color" type="button" onClick={onCommentModal}>
            {formatMessage('alert.comments')} {commentsLength && `(${commentsLength})`}
          </button>
        </div>
      </div>
    );
  }

  renderRelated = () => {
    const { visibleTab } = this.state;
    const { allRightPaneRelatedData } = this.props;

    return (
      <div className={`c-tabs__item js-tabs-content ${visibleTab === 'Related' ? 'is-active' : ''}`}>
        <nav className="c-explorer">
          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.alertedEntities')}{'  '}
            <span className='entity'>{allRightPaneRelatedData.alertEntityCount > 0 ? '' : 0}</span>
          </button>

          {_map(allRightPaneRelatedData.alertEntityList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}

          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.entities')}{' '}
            <span className='entity'> {allRightPaneRelatedData.entityCount > 0 ? '' : 0}</span></button>
          {_map(allRightPaneRelatedData.entityList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}

          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.events')}{' '}
            <span className='entity'>{allRightPaneRelatedData.eventCount > 0 ? '' : 0}</span></button>
          {_map(allRightPaneRelatedData.eventList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}

          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.transactions')}{' '}
            <span className='entity'>{allRightPaneRelatedData.transactionCount > 0 ? '' : 0}</span></button>
          {_map(allRightPaneRelatedData.transactionList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}

          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.documents')}{' '}
            <span className='entity'>{allRightPaneRelatedData.documentCount > 0 ? '' : 0}</span></button>
          {_map(allRightPaneRelatedData.documentList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}

          <button className="c-explorer__item js-explorer__item">
            {formatMessage('alert.linkCharts')}{' '}
            <span className='entity'>{allRightPaneRelatedData.linkChartCount > 0 ? '' : 0} </span></button>
          {_map(allRightPaneRelatedData.linkChartList, (each, i) => (
            <div key={i} className="relatedbar">
              <Entity
                label={each.formattedFullName ? each.formattedFullName : each.name}
                optionElement={this.rpRelatedPopOver()}
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21" className="o-icon o-icon--prepended">
                  <title>analysis-icon</title>
                  <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                </svg>}
              />
            </div>
          ))}
        </nav>
      </div>)
  }

  renderMultipleHistory = () => {
    const { allAlertList, selectedEntityList } = this.props;
    const selectedDateObj = _filter(allAlertList, each => { return _includes(selectedEntityList, each.uid) });
    const createdDA = [];
    const updatedDA = [];
    _map(selectedDateObj, each => {
      createdDA.push(moment(each.createdOn, 'DD/MM/YYYY HH:mm:ss').format('X'));
      updatedDA.push(moment(each.updatedOn, 'DD/MM/YYYY HH:mm:ss').format('X'));
    })
    const earliestCreation = moment.unix(parseInt(createdDA.sort()[0], 10));
    const latestCreation = moment.unix(parseInt(createdDA.sort()[createdDA.length - 1], 10));
    const earliestUpdate = moment.unix(parseInt(updatedDA.sort()[0], 10));
    const latestUpdate = moment.unix(parseInt(updatedDA.sort()[updatedDA.length - 1], 10));

    return (
      <div>
        <div className='rp-space' >
          <div className="u-well">
            Creation Date:
            <div className='rp-font-comment'>Earliest:</div>
            <div className='rp-font'>
              {earliestCreation.format('DD-MM-YYYY hh:mm:ss a')}
            </div>
            <div className='rp-font-comment'>Latest:</div>
            <div className='rp-font'>
              {latestCreation.format('DD-MM-YYYY hh:mm:ss a')}
            </div>
            <div className='rp-font-comment'>Time Range:</div>
            <div className='rp-font'>
              {latestCreation.from(earliestCreation, true)}
            </div>
          </div>
        </div>
        <div className='rp-space'>
          <div className="u-well">
            Last Update Date:
            <div className='rp-font-comment'>Earliest:</div>
            <div className='rp-font'>
              {earliestUpdate.format('DD-MM-YYYY hh:mm:ss a')}
            </div>
            <div className='rp-font-comment'>Latest:</div>
            <div className='rp-font'>
              {latestUpdate.format('DD-MM-YYYY hh:mm:ss a')}
            </div>
            <div className='rp-font-comment'>Time Range:</div>
            <div className='rp-font'>
              {latestUpdate.from(earliestUpdate, true)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { visibleTab } = this.state;
    const { isActive, allRightPaneHistoryData, selectedEntityList } = this.props;

    return (
      <div className={`c-content__sidebar js-content__sidebar ${isActive ? '' : 'is-hidden'}`}>
        <div className="c-tabs js-tabs c-sidebar__tabs c-popover-- is-ready">
          <nav className="c-tabs__nav">
            <ul className="c-tabs__list">
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'Related' ? 'is-active' : ''}`}
                  name="Related" onClick={this.changeVisibility}>
                  {formatMessage('alert.related')}
                </button>
              </li>
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'Details' ? 'is-active' : ''}`}
                  name="Details" onClick={this.changeVisibility} disabled={_isArray(selectedEntityList)}>
                  {formatMessage('alert.details')}
                </button>
              </li>
              <li className="c-tabs__title">
                <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === 'History' ? 'is-active' : ''}`}
                  name="History" onClick={this.changeVisibility}>
                  {formatMessage('alert.history')}
                </button>
              </li>
            </ul>
          </nav>
          <div className="c-tabs__content">
            {this.renderRelated()}
            {this.renderDetails()}

            <div className={`c-tabs__item js-tabs-content ${visibleTab === 'History' ? 'is-active' : ''}`}>
              {_isEmpty(allRightPaneHistoryData) && !_isArray(selectedEntityList) ? 'No History Found'
                : (_isArray(selectedEntityList)
                  ? this.renderMultipleHistory()
                  : _map(allRightPaneHistoryData, (each, key) => {
                    return (
                      <div className='rp-space' key={key}>
                        <div className="u-well">
                          <div className='rp-font'>
                            {each.userName} <span className='rp-sp'> {' '}  {' '} </span>
                            {new Date(each.auditTimestamp).toLocaleDateString()}
                            {new Date(each.auditTimestamp).toLocaleTimeString()}
                          </div>
                          <div className='rp-font-comment'>{each.auditComment}</div>
                        </div>
                        {'  '}
                        {' '}
                      </div>
                    )
                  }))}
            </div>
          </div>
        </div>
        {/* <div className="c-content__sidebar-footer">
          <button className="o-btn o-btn--primary c-sidebar__tabs">analysis</button>
          <button className="o-btn c-sidebar__tabs">comments</button>
        </div> */}
      </div>
    );
  }
}
