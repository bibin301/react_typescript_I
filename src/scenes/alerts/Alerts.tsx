import * as React from 'react';
import { connect } from 'react-redux';
import { map as _map } from 'lodash';
import { noop as _noop } from 'lodash';
import { has as _has } from 'lodash';
import { omit as _omit } from 'lodash';
import { isArray as _isArray } from 'lodash';
import { keys as _keys } from 'lodash';
import { pick as _pick } from 'lodash';
import { isEmpty as _isEmpty } from 'lodash';
import { filter as _filter } from 'lodash';
import * as $ from 'jquery';
import { Switch, Route, RouteComponentProps, Redirect, withRouter } from 'react-router-dom';

import CustomPopOver from  './../../components/customPopOver/customPopOver';
import Grid from './../../components/Grid/Grid';
import RightPane from './rightPane';
import Modal from 'src/components/modal/AlphaModal';
import CommentModal from './commentModal';
import AlertsFilter from './../alerts/filter/alertsFilter/alertsFilter';
import CasesFilter from './../alerts/filter/casesFilter/casesFilter';
import Parameters from './../alerts/Parameters/parameters';
import RpDetails from './../alerts/RpDetails/rpDetails';
import RadioBtnGrp from 'src/components/radioBtnGrp/RadioBtnGrp';
import Button from 'src/components/button/Button';
import CheckBoxGrp from 'src/components/checkBoxGrp/CheckBoxGrp';
import { formatMessage } from './../../common/translation/Translate';

import { RightPaneDetailsAlert } from './../../model/alert/RightPaneDetailsAlert';
import {
  getRightPaneRelated,
  getRightPaneHistory,
  getAllAlertSortedList,
  getAllCasesSortedList,
  getAllAlertFilterList,
  getAllCaseFilterList,
  getCommentHistory,
  saveComment,
  uploadDocument,
  downloadDocument
} from './../../service/alerts/action';

import {
  saveUpAlertDisplay,
  saveUpCaseDisplay
} from './../../service/login/action';

import './../../common/css/mockcss/style.css';
import './../../common/css/owncss/style.css';
import { RootStore } from '../../store/rootReducer';

interface StateProps {
  commentHistory: any[],
  allAlertList: any[],
  paginatedList: any[],
  maxRecords: number,
  pageReturned: number,
  alertIdSelectedSb: any,
  allRightPaneHistoryData: any,
  allRightPaneRelatedData: any,
  userId: string,
  id: number,
  availableLists: any[],
  isLoading: boolean,
  alertUserPreferenceList: any[],
  AlertsListFields: any[],
  caseListFields: any[],
  alertListDetails: any,
  caseListDetails: any,
  defaultCaseDisplay: any,
  defaultAlertDisplay: any,
  maxRecordPerAlertPage: number,
  maxRecordPerCasePage: number,
  alertCaseAvailableFields: any[]
}

interface Props extends StateProps, RouteComponentProps<any> {
  alertId: string,
  page: number,
  recordsPerPage: number,
  pageNumber: number,
  location: any
}

interface State {
  isCommentModalVisible: boolean,
  isDescPopoverVisible: boolean,
  selectedListId: string,
  isRightPaneActive: boolean,
  rightPaneDetails: RightPaneDetailsAlert,
  isAlertParametersVisible: boolean,
  isCaseParametersVisible: boolean,
  isRpDetailsVisible: boolean,
  isParametersVisible: boolean,
  alertSortBy: string,
  alertSortOrder: string,
  caseSortBy: string,
  caseSortOrder: string,
  alertHiddenFields: any,
  caseHiddenFields: any,
  sendHiddenFields: any,
  sendCaseHiddenFields: any,
  fieldInArray: any[],
}

// Todo: need to change the constant location
const sortDirection = {
  asc: 'Ascending',
  desc: 'Descending'
}

class AlertsDashboard extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    // allAlertList: [],
    // alertUserPreferenceList: [],
    // id: null,
    // userId: '',
    // availableLists: [],
    // location: {
    //   pathname: ''
    // },
  }

  state = {
    isCommentModalVisible: false,
    isDescPopoverVisible: false,
    selectedListId: null,
    isRightPaneActive: false,
    rightPaneDetails: new RightPaneDetailsAlert(),
    isAlertParametersVisible: false,
    isCaseParametersVisible: false,
    isRpDetailsVisible: false,
    isParametersVisible: false,
    alertSortBy: null,
    alertSortOrder: null,
    caseSortBy: null,
    caseSortOrder: null,
    alertHiddenFields: {},
    caseHiddenFields: {},
    sendHiddenFields: {},
    sendCaseHiddenFields: {},
    fieldInArray: [],
  }

  componentDidMount() {
    const { id, userId, availableLists, alertUserPreferenceList, defaultAlertDisplay,
      pageNumber, alertCaseAvailableFields } = this.props;
    // these fields are dynamic fields from BE. if sortOrder does not come then make first value as default
    const alertFields : any = _filter(alertCaseAvailableFields, { entityId: 11 })

    // take values of alert & Cases  sort from user preference

    let defaultAlertSortBy, defaultAlertSortOrder, defaultCaseSortBy, defaultCaseSortOrder, alertField, caseField;
    let alertHiddenFields = {};
    let caseHiddenFields = {};
    _map(alertUserPreferenceList, (each) => {
      if (each.preferenceCode === 'sortFieldAlert') {
        defaultAlertSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderAlert') {
        defaultAlertSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'sortFieldCase') {
        defaultCaseSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderCase') {
        defaultCaseSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'hideFieldAlert') {
        if (each.preferenceValue.includes('Alert')) {
          alertField = each.preferenceValue.replace('Alert', '');
          alertHiddenFields[alertField] = alertField;
        }
        // todo: some problem here. undefined is passing all the time
      } else if (each.preferenceCode === 'hideFieldCase') {
        if (each.preferenceValue.includes('Case')) {
          caseField = each.preferenceValue.replace('Case', '');
          caseHiddenFields[caseField] = caseField;
          // todo: some problem here. undefined is passing all the time
        }
      }
    });

    this.setState({
      alertSortBy: _isEmpty(defaultAlertSortBy) ? alertFields[0].name : defaultAlertSortBy,
      alertSortOrder: _isEmpty(defaultAlertSortOrder) ? 'asc' : defaultAlertSortOrder,
      caseSortBy: _isEmpty(defaultCaseSortBy) ? null : defaultCaseSortBy,
      caseSortOrder: _isEmpty(defaultCaseSortOrder) ? null : defaultCaseSortOrder,
      alertHiddenFields: _isEmpty(alertHiddenFields) ? {} : alertHiddenFields,
      caseHiddenFields: _isEmpty(caseHiddenFields) ? {} : caseHiddenFields
    }, () => {
      getAllAlertSortedList(1, id, userId, availableLists, this.state.alertSortBy, this.state.alertSortOrder, pageNumber, this.props.maxRecordPerAlertPage, defaultAlertDisplay);
      this.setState({ sendHiddenFields: alertHiddenFields, sendCaseHiddenFields: caseHiddenFields });
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // to hide rightpane when moved to some other url eg: today -> lastweek.
      // reset selectedListId so that reclicking on the item first time shows right pane
      this.setState({ isRightPaneActive: false, selectedListId: '' })
    }
  }
  private closeRightPane = () => {
    this.setState({ isRightPaneActive: false, selectedListId: '' })
  }
  private handleCommentSubmit = (newComment) => {
    const { userId } = this.props;
    let uid, alertUid;
    if (this.state.rightPaneDetails.userAlert) {
      uid = this.state.rightPaneDetails.userAlert.uid;
      alertUid = this.state.rightPaneDetails.userAlert.alertUid;
    } else {
      uid = this.state.rightPaneDetails.uid;
      alertUid = this.state.rightPaneDetails.uid;
    }
    saveComment(uid, newComment, alertUid, userId);
  };

  private renderDescriptionPopover = () => {
    return (
      <Modal
        saveDisabled
        isOpen={this.state.isDescPopoverVisible}
        title="Description"
        changeVisbility={this.handleDescModal}>
        <dl className="o-attribute__value">
          <p>{this.state.rightPaneDetails.description}</p>
        </dl>
      </Modal>);
  };

  private toggleHasVeil = () => {
    const { isDescPopoverVisible, isCommentModalVisible, isAlertParametersVisible, isCaseParametersVisible, isRpDetailsVisible } = this.state;
    if (isDescPopoverVisible || isCommentModalVisible || isAlertParametersVisible || isCaseParametersVisible || isRpDetailsVisible) {
      $('body').addClass('has-veil');
    } else {
      $('body').removeClass('has-veil');
    }
  };

  private handleCommentModal = () => {
    this.setState({ isCommentModalVisible: !this.state.isCommentModalVisible },
      () => this.toggleHasVeil());
  };

  private handleDescModal = () => {
    this.setState({ isDescPopoverVisible: !this.state.isDescPopoverVisible },
      () => this.toggleHasVeil());
  };

  private rightPaneRelatedFetch = () => {
    const { userId, availableLists } = this.props;
    getRightPaneRelated(this.state.selectedListId, userId, availableLists);
  };

  private rightPaneHistoryFetch = () => {
    getRightPaneHistory(this.state.selectedListId, this.props.userId);
  };

  private rightPaneDetailsFetch = (id) => {
    _map(this.props.allAlertList, (each) => {
      if (each.uid === id) {
        this.setState({ rightPaneDetails: each }, () =>
          getCommentHistory(id)
          // this.state.rightPaneDetails.userAlert &&
          // getCommentHistory(this.state.rightPaneDetails.userAlert.alertUid))
        )
      }
    })
  };

  private toggleRightPane = (id = null) => {
    const isRightPaneActive = this.state.selectedListId !== id;
    this.setState({ selectedListId: isRightPaneActive ? id : '', isRightPaneActive: isRightPaneActive },
      () => {
        if (this.state.isRightPaneActive && _isArray(id)) {
          this.rightPaneRelatedFetch();
        } else if (this.state.isRightPaneActive) {
          this.rightPaneRelatedFetch();
          this.rightPaneHistoryFetch();
          this.rightPaneDetailsFetch(id);
        }
      });
  };

  private sortedAlertListFetch = (pageNumber: any = this.props.page, maxRecordPerAlertPage: any, orderField: any = this.state.alertSortBy, orderDirection: any = this.state.alertSortOrder) => {
    const { alertIdSelectedSb, id, userId, availableLists, defaultAlertDisplay } = this.props;
    getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay);
  };
  private sortedAlertTableListFetch = (orderField: string, orderDirection: string) => {
    const { alertIdSelectedSb, id, userId, availableLists, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay } = this.props;
    getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay);
  }
  private sortedCasesTableListFetch = (orderField: string, orderDirection: string) => {
    const { alertIdSelectedSb, id, userId, availableLists, pageNumber, defaultCaseDisplay } = this.props;
    getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, this.props.maxRecordPerCasePage, defaultCaseDisplay);
  };
  private sortedCasesListFetch = (pageNumber: any = this.props.page, maxRecordPerCasePage: any, orderField: any = this.state.caseSortBy, orderDirection: any = this.state.caseSortOrder) => {
    const { alertIdSelectedSb, id, userId, availableLists, defaultCaseDisplay } = this.props;
    getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, this.props.maxRecordPerCasePage, defaultCaseDisplay);
  };

  private handleAlertCheckBox = (event) => {
    let field = event.target.id
    let allHiddenFields = this.state.alertHiddenFields;
    if (_has(allHiddenFields, field)) {
      allHiddenFields = _omit(allHiddenFields, field);
      // todo: undefined object was added so removing here . find the cause and fix it
      allHiddenFields = _omit(allHiddenFields, 'undefined')
    } else {
      allHiddenFields[field] = field;
    }
    this.setState({ alertHiddenFields: allHiddenFields });
  };

  private handleCaseCheckBox = (event) => {
    let field = event.target.id
    let allHiddenFields = this.state.caseHiddenFields;
    if (_has(allHiddenFields, field)) {
      allHiddenFields = _omit(allHiddenFields, field);
      // todo: undefined object was added so removing here . find the cause and fix it
      allHiddenFields = _omit(allHiddenFields, 'undefined');
    } else {
      allHiddenFields[field] = field;
    }
    this.setState({ caseHiddenFields: allHiddenFields });
  };

  private toggleAlertParameters = () => {
    this.setState({ isAlertParametersVisible: !this.state.isAlertParametersVisible },
      () => {
        this.toggleHasVeil();
      });
  };

  private toggleCaseParameters = () => {
    this.setState({ isCaseParametersVisible: !this.state.isCaseParametersVisible },
      () => this.toggleHasVeil());
  };

  private toggleRpDetails = (event) => {
    this.rightPaneDetailsFetch(event.target.id);
    this.setState({ isRpDetailsVisible: !this.state.isRpDetailsVisible },
      () => this.toggleHasVeil());
  };

  private hideRpDetailsPopOver = () => {
    this.setState({ isRpDetailsVisible: false }, () => this.toggleHasVeil())
  }

  private saveAlertPreferenceList = () => {
    const { id, userId } = this.props;
    let upArray = [];
    this.setState({ sendHiddenFields: this.state.alertHiddenFields},
      () => {
        upArray = _map(_keys(this.state.sendHiddenFields), (each) => {
          return each + 'Alert';
        });
        saveUpAlertDisplay(id, userId, upArray)
      });
  };

  private saveCasePreferenceList = () => {
    const { id, userId } = this.props;
    let upArray;
    this.setState({ sendCaseHiddenFields: this.state.caseHiddenFields },
      () => {
        upArray = _map(_keys(this.state.sendCaseHiddenFields), (each) => {
          return each + 'Case';
        });
        saveUpCaseDisplay(id, userId, upArray);
      });
  };

  private hidePopOver = () => {
    this.setState({
      // isPropertyVisible: false,
    });
  };

  private alertSortPopOver = (): JSX.Element => {
    const { alertSortBy, alertSortOrder } = this.state;
    const { alertCaseAvailableFields } = this.props;
    return (
      <div className="c-popover js-popover is-ready">
        <div className="c-modal__body">
          <div className="g-radio-buttons">
            <ul className="g-list g-list--borders">
              <li className="g-list__item">
                <RadioBtnGrp
                  // TODO : Need to maintain entityId as const
                  radioList={_filter(this.props.alertCaseAvailableFields, { entityId: 11 })}
                  asChecked={alertSortBy}
                  asName='name'
                  asLabel='description'
                  onChange={(event) => {
                    this.setState({ alertSortBy: event.target.value },
                      () => this.sortedAlertTableListFetch(this.state.alertSortBy, this.state.alertSortOrder));
                  }} />

              </li>
              <li className="g-list__item">
                <RadioBtnGrp
                  keyValues
                  radioList={sortDirection}
                  asChecked={alertSortOrder}
                  onChange={(event) => {
                    this.setState({ alertSortOrder: event.target.value },
                      () => this.sortedAlertTableListFetch(this.state.alertSortBy, this.state.alertSortOrder))
                  }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  private caseSortPopOver = (): JSX.Element => {
    const { caseSortBy, caseSortOrder } = this.state;
    return (
      <div className={`c-popover js-popover is-ready`}>
        <div className="c-modal__body">
          <div className="g-radio-buttons">
            <ul className="g-list g-list--borders">
              <li className="g-list__item">
                <RadioBtnGrp
                  // TODO : Need to maintain entityId as const
                  radioList={_filter(this.props.alertCaseAvailableFields, { entityId: 13 })}
                  asChecked={caseSortBy}
                  asName='name'
                  asLabel='description'
                  onChange={(event) => {
                    this.setState({ caseSortBy: event.target.value },
                      () => this.sortedCasesTableListFetch(caseSortBy, caseSortOrder));
                  }} />
              </li>
              <li className="g-list__item">
                <RadioBtnGrp
                  keyValues
                  radioList={sortDirection}
                  asChecked={caseSortOrder}
                  onChange={(event) => {
                    this.setState({ caseSortOrder: event.target.value },
                      () => this.sortedCasesTableListFetch(caseSortBy, caseSortOrder));
                  }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  private alertDisplayUserPreference = () => {
    const { alertHiddenFields } = this.state

    return (
      <div className={`c-popover js-popover is-ready`}>
        <div className="c-modal__body">
          <CheckBoxGrp
            // TODO : Need to maintain entityId as const
            checkList={_filter(this.props.alertCaseAvailableFields, { entityId: 11 })}
            asName='name'
            asLabel='description'
            onChange={this.handleAlertCheckBox}
            asChecked={_keys(alertHiddenFields)} />
        </div>
        <div className="c-modal__foot">
          <div className="c-modal__actions c-modal__actions--secondary">
            <Button onClick={this.saveAlertPreferenceList} ariaLabel='apply'>
              {formatMessage('global.apply')}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  private caseDisplayUserPreference = () => {
    const { caseHiddenFields } = this.state;

    return (
      <div className={`c-popover js-popover is-ready`}>
        <div className="c-modal__body">
          <CheckBoxGrp
            // TODO : Need to maintain entityId as const
            checkList={_filter(this.props.alertCaseAvailableFields, { entityId: 13 })}
            asName='name'
            asLabel='description'
            onChange={this.handleCaseCheckBox}
            asChecked={_keys(caseHiddenFields)} />
        </div>
        <div className="c-modal__foot">
          <div className="c-modal__actions c-modal__actions--secondary">
            <Button onClick={this.saveCasePreferenceList} ariaLabel='apply'>
              {formatMessage('global.apply')}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  private parametersPopOver = () => {
    const { isAlertParametersVisible, isCaseParametersVisible } = this.state;
    return (
      <React.Fragment>
        <Parameters
          // note: to display any one.alert parameter or case parameter
          isParametersVisible={isAlertParametersVisible || isCaseParametersVisible}
          toggleParameters={isAlertParametersVisible ? this.toggleAlertParameters : this.toggleCaseParameters}
          isCase={isCaseParametersVisible} />
      </React.Fragment>
    )
  };

  private rpDetailsPopOver = () => {
    const { isRpDetailsVisible, rightPaneDetails } = this.state;
    const { commentHistory } = this.props;
    return (
      <RpDetails
        isRpDetailsVisible={isRpDetailsVisible}
        rightPaneDetails={rightPaneDetails}
        toggleRpDetails={this.toggleRpDetails}
        onCommentModal={this.handleCommentModal}
        hideMe={this.hideRpDetailsPopOver}
        commentsLength={commentHistory && commentHistory.length} />
    )
  };

  private alertsFilterPopOver = () => {
    const { userId, availableLists, id, alertIdSelectedSb,
       alertId, alertListDetails, AlertsListFields, defaultAlertDisplay } = this.props;
    const {  fieldInArray } = this.state;
    let allProps = {
      allFieldDisplay: _map(_filter(this.props.alertCaseAvailableFields, { entityId: 11 }), (each, i) => _pick(each, ['name', 'type', 'description'])),
      fieldInArray: fieldInArray,
      AlertsListFields: AlertsListFields,
      getAllAlertFilterList: getAllAlertFilterList,
      alertId: alertId,
      id: id,
      userId: userId,
      availableLists: availableLists,
      name: userId,
      allListDetails: alertListDetails,
      alertIdSelectedSb: alertIdSelectedSb,
      defaultAlertDisplay: defaultAlertDisplay
    }
    return (
      <AlertsFilter 
        allProps={allProps} />
    );
  };

  private casesFilterPopOver = () => {
    const { userId, availableLists, id, alertIdSelectedSb,
       caseListDetails, AlertsListFields } = this.props;
    const { fieldInArray } = this.state;
    let allProps = {
      allFieldDisplay: _map(_filter(this.props.alertCaseAvailableFields, { entityId: 13 }), (each, i) => _pick(each, ['name', 'type', 'description'])),
      fieldInArray: fieldInArray,
      AlertsListFields: AlertsListFields,
      getAllAlertFilterList: getAllCaseFilterList,
      // alertId: alertId,
      id: id,
      userId: userId,
      availableLists: availableLists,
      name: userId,
      allListDetails: caseListDetails,
      alertIdSelectedSb: alertIdSelectedSb
    }
    return (
      <CasesFilter
      allProps={allProps} />
    );
  };

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

  private renderAlert = (name) => {
    const { pageReturned, maxRecords, allAlertList, defaultAlertDisplay,
      alertCaseAvailableFields, maxRecordPerAlertPage } = this.props;
    const { isRightPaneActive, sendHiddenFields } = this.state;

    const recordsMetaInfo = {
      selectionMadeBy: 'uid',
      // badge: null,
      // primaryBadge: null,
      // onAction:
      riskLevelStyleBy: 'score',
      expectedColumns: 5,
      onClick: this.toggleRightPane,
      records: [
        {
          name: 'scenarioName',
          type: 'string',
        },
        {
          name: 'uid',
          type: 'string',
          cardBadge: true,
          onDoubleClick: this.toggleRpDetails
        },
        {
          name: 'score',
          type: 'string',
        },
        {
          name: 'priority',
          type: 'string',
          getName: this.priorityStatus,
          getStyle: (priority) => 'c-horizontal-card__data-value ' + this.priorityStatus(priority),
        },
        {
          name: 'dueDate',
          type: 'date',
          availableFormat: 'DD/MM/YYYY HH:mm:ss',
          expectedFormat: 'ddd MMM YY HH:mm:ss'
        },
      ],
    };
    
    return (
      <Grid
        infiniteScroll
        name={name}
        recordsMetaInfo={recordsMetaInfo}
        records={allAlertList}
        maxRecords={maxRecords}
        maxRecordPerPage={maxRecordPerAlertPage}
        activePage={pageReturned}
        onSort={this.sortedAlertTableListFetch}
        onPageChange={this.sortedAlertListFetch}
        toggleRightPane={this.toggleRightPane}
        toggleParameters={this.toggleAlertParameters}
        filterPopover={this.alertsFilterPopOver}
        sortPopover={this.alertSortPopOver}
        displayPopover={this.alertDisplayUserPreference}
        isRightPaneActive={isRightPaneActive}
        closeRightPane={this.closeRightPane}
        hiddenFields={sendHiddenFields}
        availableFields={alertCaseAvailableFields}
      />);
  };

  private renderCase = (name) => {
    const { maxRecords, allAlertList, pageReturned, maxRecordPerCasePage,
      alertCaseAvailableFields, defaultCaseDisplay } = this.props;
    const { isRightPaneActive, sendCaseHiddenFields } = this.state;

    const recordsMetaInfo = {
      selectionMadeBy: 'uid',
      // badge: null,
      // primaryBadge: null,
      // onAction:
      riskLevelStyleBy: 'score',
      onClick: this.toggleRightPane,
      records: [
        {
          name: 'scenarioName',
          type: 'string',
        },
        {
          name: 'uid',
          type: 'string',
          cardBadge: true,
          onDoubleClick: this.toggleRpDetails
        },
        {
          name: 'score',
          type: 'string',
        },
        {
          name: 'priority',
          type: 'string',
          getName: this.priorityStatus,
          getStyle: (priority) => 'c-horizontal-card__data-value ' + this.priorityStatus(priority),
        },
        {
          name: 'dueDate',
          type: 'date',
          availableFormat: 'DD/MM/YYYY HH:mm:ss',
          expectedFormat: 'ddd MMM YY HH:mm:ss'
        },
      ],
    };

    return (
      <Grid 
        infiniteScroll
        name={name}
        recordsMetaInfo={recordsMetaInfo}
        records={allAlertList}
        maxRecords={maxRecords}
        maxRecordPerPage={maxRecordPerCasePage}
        activePage={pageReturned}
        onSort={this.sortedCasesTableListFetch}
        onPageChange={this.sortedCasesListFetch}
        toggleRightPane={this.toggleRightPane}
        toggleParameters={this.toggleCaseParameters}
        filterPopover={this.casesFilterPopOver}
        sortPopover={this.caseSortPopOver}
        displayPopover={this.caseDisplayUserPreference}
        isRightPaneActive={isRightPaneActive}
        closeRightPane={this.closeRightPane}
        hiddenFields={sendCaseHiddenFields}
        availableFields={alertCaseAvailableFields}
      />)
  }

  public render() {
    const { allAlertList, allRightPaneHistoryData, allRightPaneRelatedData,
      isLoading, userId, availableLists, commentHistory } = this.props;
    const { isRightPaneActive, rightPaneDetails, isAlertParametersVisible, isCaseParametersVisible, selectedListId } = this.state;
    return (
      <div className="c-content__view js-content__view">
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {isAlertParametersVisible && this.parametersPopOver()}
        {isCaseParametersVisible && this.parametersPopOver()}

        <CommentModal
          isOpen={this.state.isCommentModalVisible}
          title="Comment"
          author={this.props.userId}
          comments={this.props.commentHistory}
          handleSubmit={this.handleCommentSubmit}
          changeVisbility={this.handleCommentModal} />

        {this.state.isRpDetailsVisible && this.rpDetailsPopOver()}
        {this.renderDescriptionPopover()}

        <Switch>
          <Redirect exact path="/dashboard/alerts" to="/dashboard/alerts/my_alerts" />
          <Route path="/dashboard/alerts/my_alerts" render={() => this.renderAlert('my_alerts')} />
          <Route path="/dashboard/alerts/today" render={() => this.renderAlert('today')} />
          <Route path="/dashboard/alerts/yesterday" render={() => this.renderAlert('yesterday')} />
          <Route path="/dashboard/alerts/earlier_this_week" render={() => this.renderAlert('earlier_this_week')} />
          <Route path="/dashboard/alerts/last_week" render={() => this.renderAlert('last_week')} />
          <Route path="/dashboard/alerts/two_weeks_ago" render={() => this.renderAlert('two_weeks_ago')} />
          <Route path="/dashboard/alerts/three_weeks_ago" render={() => this.renderAlert('three_weeks_ago')} />
          <Route path="/dashboard/alerts/four_weeks_ago" render={() => this.renderAlert('four_weeks_ago')} />
          <Route path="/dashboard/alerts/alerts_older" render={() => this.renderAlert('alerts_older')} />
          <Route path="/dashboard/alerts/my_cases" render={() => this.renderCase('my_cases')} />
          <Route path="/dashboard/alerts/this_month" render={() => this.renderCase('this_month')} />
          <Route path="/dashboard/alerts/earlier_this_semester" render={() => this.renderCase('earlier_this_semester')} />
          <Route path="/dashboard/alerts/last_semester" render={() => this.renderCase('last_semester')} />
          <Route path="/dashboard/alerts/cases_older" render={() => this.renderCase('cases_older')} />
        </Switch>
        <RightPane
          rightPaneRelatedFetch={this.rightPaneRelatedFetch}
          rightPaneHistoryFetch={this.rightPaneHistoryFetch}
          isActive={isRightPaneActive}
          allRightPaneHistoryData={allRightPaneHistoryData}
          allAlertList={allAlertList}
          allRightPaneRelatedData={allRightPaneRelatedData}
          rightPaneDetails={rightPaneDetails}
          onCommentModal={this.handleCommentModal}
          onDescPopover={this.handleDescModal}
          onFileUpload={uploadDocument}
          onFileDownload={downloadDocument}
          userId={userId}
          availableLists={availableLists}
          selectedEntityList={selectedListId}
          commentsLength={commentHistory && commentHistory.length} />
      </div>
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  commentHistory: state.alertsReducer.entityCommentForEntityWithHistory,
  allAlertList: state.alertsReducer.allAlertList,
  paginatedList: state.alertsReducer.paginatedList,
  maxRecords: state.alertsReducer.maxRecords,
  pageReturned: state.alertsReducer.pageReturned,
  alertIdSelectedSb: state.alertsReducer.alertIdSelectedSb,
  allRightPaneHistoryData: state.alertsReducer.allRightPaneHistoryData,
  allRightPaneRelatedData: state.alertsReducer.allRightPaneRelatedData,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  availableLists: state.loginReducer.availableLists,
  isLoading: state.commonReducer.isLoading,
  alertUserPreferenceList: state.loginReducer.alertUserPreferenceList,
  AlertsListFields: state.loginReducer.AlertsListFields,
  caseListFields: state.loginReducer.caseListFields,
  alertListDetails: state.loginReducer.alertListDetails,
  caseListDetails: state.loginReducer.caseListDetails,
  defaultCaseDisplay: state.loginReducer.defaultCaseDisplay,
  defaultAlertDisplay: state.loginReducer.defaultAlertDisplay,
  maxRecordPerAlertPage: state.loginReducer.maxRecordPerAlertPage,
  maxRecordPerCasePage: state.loginReducer.maxRecordPerCasePage,
  alertCaseAvailableFields: state.loginReducer.alertCaseAvailableFields
})

export const  AlertsConnected = connect(mapStateToProps, null)(AlertsDashboard)
export const  AlertsConnectedWithRouter = withRouter(AlertsConnected);
