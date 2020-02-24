// Library import
import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { map as _map } from 'lodash';
import { isEmpty as _isEmpty } from 'lodash';
import { Switch, Route, Redirect } from 'react-router-dom';
// App import
import { RootStore } from './../../store/rootReducer';
import { TopbarConnectedWithRouter } from './Topbar';
import { SidebarConnectedWithRouter } from './Sidebar';
import AnalysisDashboard from './../analysis/analysis';
import DetectionDashboard from './../detection/detection';
import { DataDashboard } from './../data/Data';
import AdminDashboard from './../admin/admin';
import { AlertsConnectedWithRouter } from './../alerts/Alerts';
import BottomNotificationComponent  from './../../components/bottomNotification/BottomNotification'

import {
  getAllSbAlertRecentStatus,
  getAllSbAlertCaseStatus,
  getAllAlertList,
  getAllCaseList
} from './../../service/alerts/action';
import {
  getAllDetectionRulesList,
  getAllDetectionScenariosList,
  getAllDetectionProfilesList,
  getAllSbDetectionRulesStatus,
  getAllSbDetectionScenariosStatus,
  getAllSbDetectionProfilesStatus
} from './../../service/detection/action';
import {
  getAllAdminUserList,
  getAllAdminGroupList,
  getAllAdminRoleList,
  getAllAdminRisksList,
  getAllAdminOrgUnitList,
  getAllAdminLogicalViews,
  getAllAdminSchedulerList,
  getAllAdminWorkflowList
} from './../../service/admin/action';

import './../../common/css/mockcss/style.css';
import './../../common/css/owncss/style.css';


interface StateProps {
  allSbAlertRecentStatus: any,
  allSbDetectionRulesStatus: any,
  allSbDetectionScenariosStatus: any,
  allSbAlertCaseStatus: any,
  allSbDetectionProfilesStatus: any,
  id: number,
  userId: string,
  user: string,
  loggedUser: string,
  defaultAlertDisplay: any[],
  defaultCaseDisplay: any[],
  alertUserPreferenceList: any[],
  availableLists: any[],
  isLoading: boolean,
  availableOrgUnits: any[],
  orgUnits: any[],
  availablePerms: any[],
  detectionNameSelectedSb: any,
  maxRecordPerAlertPage: number,
  maxRecordPerCasePage: number
}

/* interface DispatchProps {
  getAllDetectionScenariosList: () => void,
  getAllDetectionProfilesList: () => void,
  getAllDetectionRulesList: () => void,
  getAllAlertSortedList: () => void,
  getAllSbAlertRecentStatus: () => void,
  getAllSbDetectionScenariosStatus: () => void,
  getAllSbAlertCaseStatus: () => void,
  getAllSbDetectionRulesStatus: () => void,
  getAllSbDetectionProfilesStatus: () => void,
  getAllAlertList: () => void,
  getAllAdminLogicalViews: () => void,
  getAllCasesSortedList: () => void,
  getAllAdminUserList: () => void,
  getAllAdminGroupList: () => void,
  getAllAdminRisksList: () => void,
  getAllAdminRoleList: () => void,
  getAllAdminOrgUnitList: () => void,
  getAllCaseList: () => void,
} */

interface Props extends StateProps {

}

interface State {
  alertSortBy: string,
  alertSortOrder: string,
  caseSortBy: string,
  caseSortOrder: string
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      alertSortBy: '',
      alertSortOrder: '',
      caseSortBy: '',
      caseSortOrder: ''
    }
  }
  componentDidMount() {
    const { userId, availableLists, alertUserPreferenceList, defaultAlertDisplay, defaultCaseDisplay } = this.props;
    getAllSbAlertRecentStatus(userId, availableLists, defaultAlertDisplay);
    getAllSbDetectionScenariosStatus(userId, availableLists);
    getAllSbAlertCaseStatus(userId, availableLists, defaultCaseDisplay);
    getAllSbDetectionRulesStatus(userId, availableLists);
    getAllSbDetectionProfilesStatus(userId, availableLists);

    let defaultAlertSortBy, defaultAlertSortOrder, defaultCaseSortBy, defaultCaseSortOrder;
    _map(alertUserPreferenceList, (each) => {
      if (each.preferenceCode === 'sortFieldAlert') {
        defaultAlertSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderAlert') {
        defaultAlertSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'sortFieldCase') {
        defaultCaseSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderCase') {
        defaultCaseSortOrder = each.preferenceValue;
      }
    });

    this.setState({
      alertSortBy: _isEmpty(defaultAlertSortBy) || defaultAlertSortBy === 'null' ? null : defaultAlertSortBy,
      alertSortOrder: _isEmpty(defaultAlertSortOrder) || defaultAlertSortOrder === 'null' ? null : defaultAlertSortOrder,
      caseSortBy: _isEmpty(defaultCaseSortBy) || defaultCaseSortBy === 'null' ? null : defaultCaseSortBy,
      caseSortOrder: _isEmpty(defaultCaseSortOrder) || defaultCaseSortOrder === 'null' ? null : defaultCaseSortOrder
    })
  }

  render() {
    const { allSbAlertRecentStatus, allSbAlertCaseStatus, id, userId, availableLists, isLoading,
      availableOrgUnits, orgUnits, availablePerms, allSbDetectionRulesStatus, allSbDetectionScenariosStatus,
      allSbDetectionProfilesStatus, defaultAlertDisplay, defaultCaseDisplay, loggedUser, user } = this.props;
    const { caseSortBy, caseSortOrder, alertSortBy, alertSortOrder } = this.state;

    const sortedAlertListFetch = (alertIdSelectedSb) => {
      getAllAlertList(alertIdSelectedSb, id, userId, availableLists, alertSortBy, alertSortOrder, defaultAlertDisplay, this.props.maxRecordPerAlertPage);
    }
    const sortedCasesListFetch = (alertIdSelectedSb) => {
      getAllCaseList(alertIdSelectedSb, id, userId, availableLists, caseSortBy, caseSortOrder, defaultCaseDisplay, this.props.maxRecordPerCasePage);
    }
    const detectionRulesListFetch = (detectionIdSelectedSb: number) => {
      getAllDetectionRulesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const detectionScenariosListFetch = (detectionNameSelectedSb: string) => {
      getAllDetectionScenariosList(detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const detectionProfilesListFetch = (detectionIdSelectedSb: number) => {
      getAllDetectionProfilesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const sbAdminUserListFetch = () => {
      getAllAdminUserList(userId);
    }
    const sbAdminGroupListFetch = () => {
      getAllAdminGroupList(userId);
    }
    const sbAdminRoleListFetch = () => {
      getAllAdminRoleList(userId);
    }
    const sbAdminRisksListFetch = () => {
      getAllAdminRisksList(userId);
    }
    const sbAdminOrgUnitListFetch = () => {
      getAllAdminOrgUnitList();
    }
    const sbAdminLogicalViewFetch = () => {
      getAllAdminLogicalViews(id, userId);
    }
    const sbAdminSchedulerListFetch = () => {
      getAllAdminSchedulerList(user);
    }
    const sbAdminWorkflowListFetch = () => {
      getAllAdminWorkflowList(user);
    }

    return (
      <React.Fragment>
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {/* todo: think about writing all service inside sidebar itself. so unwanted props can be reduced */}
        <div className="c-main">
          <SidebarConnectedWithRouter
            allSbAlertRecentStatus={allSbAlertRecentStatus}
            allSbAlertCaseStatus={allSbAlertCaseStatus}
            sortedAlertListFetch={sortedAlertListFetch}
            sortedCasesListFetch={sortedCasesListFetch}
            allSbDetectionProfilesStatus={allSbDetectionProfilesStatus}
            allSbDetectionRulesStatus={allSbDetectionRulesStatus}
            allSbDetectionScenariosStatus={allSbDetectionScenariosStatus}
            sbAdminUserListFetch={sbAdminUserListFetch}
            sbAdminGroupListFetch={sbAdminGroupListFetch}
            detectionRulesListFetch={detectionRulesListFetch}
            detectionScenariosListFetch={detectionScenariosListFetch}
            detectionProfilesListFetch={detectionProfilesListFetch}
            sbAdminRoleListFetch={sbAdminRoleListFetch}
            sbAdminRisksListFetch={sbAdminRisksListFetch}
            sbAdminOrgUnitListFetch={sbAdminOrgUnitListFetch}
            sbAdminLogicalViewFetch={sbAdminLogicalViewFetch}
            sbAdminSchedulerListFetch={sbAdminSchedulerListFetch}
            sbAdminWorkflowListFetch={sbAdminWorkflowListFetch} />
          <div className="c-content">
            <TopbarConnectedWithRouter loggedUser={loggedUser} />
            <Switch>
              <Redirect exact path="/dashboard" to="/dashboard/alerts" />
              <Route path="/dashboard/alerts" component={AlertsConnectedWithRouter} />
              <Route path="/dashboard/analysis" component={AnalysisDashboard} />
              <Route path="/dashboard/detection" component={DetectionDashboard} />
              <Route path="/dashboard/data" component={DataDashboard} />
              <Route path="/dashboard/admin" component={AdminDashboard} />
            </Switch>
            <BottomNotificationComponent />
          </div>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state: RootStore) => ({
  allSbAlertRecentStatus: state.alertsReducer.allSbAlertRecentStatus,
  allSbDetectionRulesStatus: state.detectionReducer.allSbDetectionRulesStatus,
  allSbDetectionScenariosStatus: state.detectionReducer.allSbDetectionScenariosStatus,
  allSbDetectionProfilesStatus: state.detectionReducer.allSbDetectionProfilesStatus,
  allSbAlertCaseStatus: state.alertsReducer.allSbAlertCaseStatus,
  id: state.loginReducer.userDetails.user.id,
  userId: state.loginReducer.userDetails.user.userId,
  loggedUser: state.loginReducer.userDetails.user.fullName,
  availableLists: state.loginReducer.availableLists,
  isLoading: state.commonReducer.isLoading,
  alertUserPreferenceList: state.loginReducer.alertUserPreferenceList,
  availableOrgUnits: state.loginReducer.availableOrgUnits,
  availablePerms: state.loginReducer.availablePerms,
  defaultCaseDisplay: state.loginReducer.defaultCaseDisplay,
  defaultAlertDisplay: state.loginReducer.defaultAlertDisplay,
  orgUnits: state.loginReducer.orgUnits,
  detectionNameSelectedSb: state.detectionReducer.detectionNameSelectedSb,
  maxRecordPerAlertPage: state.loginReducer.maxRecordPerAlertPage,
  maxRecordPerCasePage: state.loginReducer.maxRecordPerCasePage,
  user: state.loginReducer.userDetails.user
})


export const DashboardConnected = connect<{}, {}, Props>(mapStateToProps, null)(Dashboard);
