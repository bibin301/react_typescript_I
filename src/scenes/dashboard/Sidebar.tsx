import * as React from 'react';
import { connect } from 'react-redux';
import { map as _map } from 'lodash';
import { RouteComponentProps, withRouter, NavLink } from 'react-router-dom';

import AlphaButton from 'src/components/alphaButton/AlphaButton';
import { TreeView } from './../../components/treeview/AlphaTreeView';
import { setTopBarTitle, alertIdSelectedSb } from './../../service/alerts/action';
import { detectionIdSelectedSb, detectionNameSelectedSb } from './../../service/detection/action';
import { getChildrenListByParentID } from './../../service/data/action';
import { RootStore } from '../../store/rootReducer';
import { formatMessage } from './../../common/translation/Translate';

import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

import './../../common/css/mockcss/style.css';
import './../../common/css/owncss/style.css';

interface StateProps {
  allTreeFolderList?: any,
  userId?: string,
  id?: number,
  name?: string
}

interface Props extends StateProps, RouteComponentProps<any> {
  allSbAlertRecentStatus: any,
  allSbAlertCaseStatus: any,
  allSbDetectionProfilesStatus: any,
  allSbDetectionRulesStatus: any,
  allSbDetectionScenariosStatus: any,
  // location: { pathname: string }, // Don't require
  detectionRulesListFetch: (id: number | string) => void | any,
  sbAdminLogicalViewFetch: () => void,
  detectionScenariosListFetch: (name: string) => void,
  detectionProfilesListFetch: (id: number | string) => void,
  sortedAlertListFetch: any,
  sortedCasesListFetch: any,
  sbAdminUserListFetch: () => void,
  sbAdminGroupListFetch: () => void,
  sbAdminRoleListFetch: () => void,
  sbAdminOrgUnitListFetch: () => void,
  sbAdminRisksListFetch: () => void,
  sbAdminSchedulerListFetch: any,
  sbAdminWorkflowListFetch: any
}

interface State {
  showSidebar: string,
  isAlertSbActive: string
}


class Sidebar extends React.Component<Props, State> {

  state = {
    showSidebar: 'is-hidden',
    isAlertSbActive: 'My Alerts'
  };

  changeAlertActive = (value) => {
    this.setState({ isAlertSbActive: value }, () =>
      setTopBarTitle(this.state.isAlertSbActive));
  };

  dataListAction = (dataID) => {
    const { id, userId, name } = this.props;
    getChildrenListByParentID(dataID, id, userId, name);
  };

  renderData = () => {
    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            {formatMessage('sideBar.data')}
          </h1>
          <svg className="o-icon" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
            <title>search-icon</title>
            <use xlinkHref={SvgIconEnum.SEARCH.url}></use>
          </svg>
          <svg className="o-icon" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <use xlinkHref={SvgIconEnum.EXPORT.url}></use>
          </svg>
        </div>
        {/* <BuildTreeView
                TreeView={this.props.allTreeFolderList} /> */}
        {_map(this.props.allTreeFolderList, (each: any, key) => (
          <div key={each.id} className="c-main-nav__submenu">
            <div className="c-explorer-header">
              <h3 className="c-explorer-header__title">{each.label}</h3>
            </div>
            <nav className="c-explorer">
              <TreeView list={each.children} itemAction={this.dataListAction} />
            </nav>
          </div>)
        )}
      </div>
    );
  }

  renderAlerts = () => {
    const { allSbAlertRecentStatus, allSbAlertCaseStatus, sortedAlertListFetch } = this.props;
    const sbAlertList = [{
      alertId: 1,
      alertName: 'My Alerts',
      alertStatus: allSbAlertRecentStatus.amountOfMyAlerts,
      link: '/dashboard/alerts/my_alerts'
    }, {
      alertId: 2,
      alertName: 'Today',
      alertStatus: allSbAlertRecentStatus.amountOfToday,
      link: '/dashboard/alerts/today'
    }, {
      alertId: 3,
      alertName: 'Yesterday',
      alertStatus: allSbAlertRecentStatus.amountOfOneDay,
      link: '/dashboard/alerts/yesterday'
    }, {
      alertId: 4,
      alertName: 'Earlier this week',
      alertStatus: allSbAlertRecentStatus.amountOfCurrentWeek,
      link: '/dashboard/alerts/earlier_this_week'
    }, {
      alertId: 5,
      alertName: 'Last week',
      alertStatus: allSbAlertRecentStatus.amountOfOneWeek,
      link: '/dashboard/alerts/last_week'
    }, {
      alertId: 6,
      alertName: 'Two weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfTwoWeeks,
      link: '/dashboard/alerts/two_weeks_ago'
    }, {
      alertId: 7,
      alertName: 'Three weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfThreeWeeks,
      link: '/dashboard/alerts/three_weeks_ago'
    }, {
      alertId: 8,
      alertName: 'Four weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfFourWeeks,
      link: '/dashboard/alerts/four_weeks_ago'
    }, {
      alertId: 9,
      alertName: 'Older',
      alertStatus: allSbAlertRecentStatus.amountOfOlder,
      link: '/dashboard/alerts/alerts_older'
    }];

    const sbCaseList = [{
      alertId: 1,
      alertName: 'My cases',
      alertStatus: allSbAlertCaseStatus.amountOfMyAlerts,
      link: '/dashboard/alerts/my_cases'
    },
    {
      alertId: 2,
      alertName: 'This Month',
      alertStatus: allSbAlertCaseStatus.amountOfOneMonth,
      link: '/dashboard/alerts/this_month'
    }, {
      alertId: 3,
      alertName: 'Earlier This Semester',
      alertStatus: allSbAlertCaseStatus.amountOfSixMonths,
      link: '/dashboard/alerts/earlier_this_semester'
    }, {
      alertId: 4,
      alertName: 'Last Semester',
      alertStatus: allSbAlertCaseStatus.amountOfOneYear,
      link: '/dashboard/alerts/last_semester'
    }, {
      alertId: 5,
      alertName: 'Older',
      alertStatus: allSbAlertCaseStatus.amountOfOlder,
      link: '/dashboard/alerts/cases_older'
    }];

    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            {formatMessage('sideBar.alerts')}
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">
            {_map(sbAlertList, (each: any, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <AlphaButton className='c-explorer__item js-explorer__item '
                    id={each.alertId} name={each.alertName}
                    onClick={(event) => {
                      sortedAlertListFetch(event.target.id);
                      alertIdSelectedSb(each.alertId)
                      this.changeAlertActive(event.target.name);
                    }}
                    key={key}>{each.alertName}
                    <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                  </AlphaButton>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.cases')}
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbCaseList, (each: any, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <AlphaButton className='c-explorer__item js-explorer__item'
                    id={each.alertId} name={each.alertName} key={key}
                    onClick={(event) => {
                      this.props.sortedCasesListFetch(event.target.id);
                      alertIdSelectedSb(each.alertId)
                      this.changeAlertActive(event.target.name);
                    }}> {each.alertName}
                    <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                  </AlphaButton>
                </NavLink>
              )
            })}
          </nav>
        </div> </div>
    );
  };

  SidebarAnalysis = () => {
    const { isAlertSbActive } = this.state;
    const sbAnalysisList = [
      {
        analysisId: 1,
        analysisName: 'Today'
        // analysisStatus: allSbAnalysisRecentStatus.amountOfMyAlerts
      }, {
        analysisId: 2,
        analysisName: 'Tomorrow'
        // analysisStatus: allSbAnalysisRecentStatus.amountOfOneDay
      }, {
        analysisId: 3,
        analysisName: 'Earlier this week'
        // analysisStatus: allSbAnalysisRecentStatus.amountOfCurrentWeek
      }, {
        analysisId: 4,
        analysisName: 'Last week'
        // analysisStatus: allSbAnalysisRecentStatus.amountOfOneWeek
      }
    ];
    const sbAnalysisCaseList = [
      {
        analysisId: 1,
        analysisName: 'My Cases'
        // analysisStatus: allSbAnalysisCaseStatus.amountOfMyAlerts
      },
      {
        analysisId: 2,
        analysisName: 'This Month'
        // analysisStatus: allSbAnalysisCaseStatus.amountOfOneMonth
      }, {
        analysisId: 3,
        analysisName: 'Earlier This Week'
        // analysisStatus: allSbAnalysisCaseStatus.amountOfSixMonths
      }, {
        analysisId: 4,
        analysisName: 'Last Week'
        // analysisStatus: allSbAnalysisCaseStatus.amountOfOneYear
      }
    ];
    const sbAnalysisPersonalList = [
      {
        analysisId: 1,
        analysisName: 'My Cases'
        // analysisStatus: allSbAnalysisPersonalStatus.amountOfMyAlerts
      },
      {
        analysisId: 2,
        analysisName: 'This Month'
        // analysisStatus: allSbAnalysisPersonalStatus.amountOfOneMonth
      }, {
        analysisId: 3,
        analysisName: 'Earlier This Week'
        // analysisStatus: allSbAnalysisPersonalStatus.amountOfSixMonths
      }, {
        analysisId: 4,
        analysisName: 'Last Week'
        // analysisStatus: allSbAnalysisPersonalStatus.amountOfOneYear
      }
    ];

    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            {formatMessage('sideBar.analysis')}
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">

            {_map(sbAnalysisList, (each: any, key) => {
              return (

                <AlphaButton className={`c-explorer__item js-explorer__item $isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}
                  key={key}>{each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </AlphaButton>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.cases')}
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbAnalysisCaseList, (each: any, key) => {
              return (
                <AlphaButton className={`c-explorer__item js-explorer__item ${isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName} key={key}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}> {each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </AlphaButton>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.personal')}
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbAnalysisPersonalList, (each: any, key) => {
              return (
                <AlphaButton className={`c-explorer__item js-explorer__item ${isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName} key={key}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}> {each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </AlphaButton>
              )
            })}
          </nav>
        </div>
      </div>
    );
  };

  SidebarDetection = () => {
    const { allSbDetectionProfilesStatus, allSbDetectionRulesStatus, allSbDetectionScenariosStatus } = this.props;
    const sbDetectionProfilesList = [
      {
        detectionId: 0,
        detectionName: 'Per Record',
        link: '/dashboard/detection/profiles/per_record',
        detectionStatus: allSbDetectionProfilesStatus.amountPerRecord
      }, {
        detectionId: 4,
        detectionName: 'Daily',
        link: '/dashboard/detection/profiles/p_daily',
        detectionStatus: allSbDetectionProfilesStatus.amountDaily
      }, {
        detectionId: 5,
        detectionName: 'Weekly',
        link: '/dashboard/detection/profiles/p_weekly',
        detectionStatus: allSbDetectionProfilesStatus.amountWeekly
      }, {
        detectionId: 6,
        detectionName: 'Monthly',
        link: '/dashboard/detection/profiles/p_monthly',
        detectionStatus: allSbDetectionProfilesStatus.amountMonthly
      }, {
        detectionId: 9,
        detectionName: 'Quarterly',
        link: '/dashboard/detection/profiles/p_quarterly',
        detectionStatus: allSbDetectionProfilesStatus.numberOfQuarters
      }, {
        detectionId: 10,
        detectionName: 'Yearly',
        link: '/dashboard/detection/profiles/p_yearly',
        detectionStatus: allSbDetectionProfilesStatus.numberOfYears
      }, {
        detectionId: 7,
        detectionName: 'Hourly',
        link: '/dashboard/detection/profiles/p_hourly',
        detectionStatus: allSbDetectionProfilesStatus.numberHourly
      },
      {
        detectionId: 8,
        detectionName: 'Minutely',
        link: '/dashboard/detection/profiles/p_minutely',
        detectionStatus: allSbDetectionProfilesStatus.numberMinutely
      }
    ];
    const sbDetectionScenariosList = [
      {
        detectionId: 1,
        detectionName: 'Online',
        link: '/dashboard/detection/scenarios/online',
        detectionStatus: allSbDetectionScenariosStatus.online
      },
      {
        detectionId: 2,
        detectionName: 'RealTime',
        link: '/dashboard/detection/scenarios/real_time',
        detectionStatus: allSbDetectionScenariosStatus.realTime
      }, {
        detectionId: 3,
        detectionName: 'Batch',
        link: '/dashboard/detection/scenarios/batch',
        detectionStatus: allSbDetectionScenariosStatus.batch
      }, {
        detectionId: 4,
        detectionName: 'Workflow',
        link: '/dashboard/detection/scenarios/workflow',
        detectionStatus: allSbDetectionScenariosStatus.workflow
      }
    ];
    const sbDetectionRulesList = [
      {
        detectionId: 0,
        detectionName: 'Per Record',
        link: '/dashboard/detection/rules/r_per_record',
        detectionStatus: allSbDetectionRulesStatus.amountPerRecord
      }, {
        detectionId: 1,
        detectionName: 'Daily',
        link: '/dashboard/detection/rules/r_daily',
        detectionStatus: allSbDetectionRulesStatus.amountDaily
      }, {
        detectionId: 2,
        detectionName: 'Weekly',
        link: '/dashboard/detection/rules/r_weekly',
        detectionStatus: allSbDetectionRulesStatus.amountWeekly
      }, {
        detectionId: 3,
        detectionName: 'Monthly',
        link: '/dashboard/detection/rules/r_monthly',
        detectionStatus: allSbDetectionRulesStatus.amountMonthly
      }, {
        detectionId: 4,
        detectionName: 'Quarterly',
        link: '/dashboard/detection/rules/r_quarterly',
        detectionStatus: allSbDetectionRulesStatus.numberOfQuarters
      }, {
        detectionId: 5,
        detectionName: 'Yearly',
        link: '/dashboard/detection/rules/r_yearly',
        detectionStatus: allSbDetectionRulesStatus.numberOfYears
      }
    ];

    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            {formatMessage('sideBar.detection')}
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.rules')}
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbDetectionRulesList, (each: any, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <AlphaButton className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName}
                    onClick={(event) => {
                      this.props.detectionRulesListFetch(event.target.id);
                      detectionIdSelectedSb(each.detectionId)
                      this.changeAlertActive(event.target.name)
                    }}
                    key={key}>{each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </AlphaButton>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.scenarios')}
            </h3>
          </div>
          <nav className="c-explorer">
            {_map(sbDetectionScenariosList, (each: any, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <AlphaButton className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName} key={key}
                    onClick={(event) => {
                      this.props.detectionScenariosListFetch(each.detectionName);
                      detectionNameSelectedSb(each.detectionName)
                      this.changeAlertActive(event.target.name)
                    }}> {each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </AlphaButton>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              {formatMessage('sideBar.profiles')}
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbDetectionProfilesList, (each: any, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <AlphaButton className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName} key={key}
                    onClick={(event) => {
                      this.props.detectionProfilesListFetch(event.target.id);
                      detectionIdSelectedSb(each.detectionId)
                      this.changeAlertActive(event.target.name)
                    }}> {each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </AlphaButton>
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    );
  }

  SidebarAdmin = () => {
    const { isAlertSbActive } = this.state;
    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            {formatMessage('sideBar.admin')}
          </h1>
          <svg className="o-icon o-icon-rotate" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <use xlinkHref={SvgIconEnum.EXPORT.url}></use>
          </svg>
          <svg className="o-icon" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <use xlinkHref={SvgIconEnum.EXPORT.url}></use>
          </svg>
          <svg className="o-icon" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
            <title>search-icon</title>
            <use xlinkHref={SvgIconEnum.SEARCH.url}></use>
          </svg>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">

            <NavLink to='/dashboard/admin/users' activeClassName='custButtonActive'>
              <button className='c-explorer__item js-explorer-item' type="button"
                onClick={(event) => {
                  this.props.sbAdminUserListFetch();
                  this.changeAlertActive('Users');
                }}>
                {formatMessage('sideBar.users')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/groups' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Groups' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminGroupListFetch();
                  this.changeAlertActive('Groups');
                }}>
                {formatMessage('sideBar.groups')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/roles' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Roles' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminRoleListFetch();
                  this.changeAlertActive('Roles');
                }}>
                {formatMessage('sideBar.roles')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/organization_units' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Organization Units' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminOrgUnitListFetch();
                  this.changeAlertActive('Organization Units');
                }}>
                {formatMessage('sideBar.organizationUnits')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/risks' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Risks' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminRisksListFetch();
                  this.changeAlertActive('Risks');
                }}>
                {formatMessage('sideBar.risks')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/logical_views' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Logical views' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminLogicalViewFetch();
                  this.changeAlertActive('Logical views');
                }}>
                {formatMessage('sideBar.logicalViews')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/scheduler' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Scheduler' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminSchedulerListFetch();
                  this.changeAlertActive('Scheduler');
                }}>
                {formatMessage('sideBar.scheduler')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/overview' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Overview' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Overview');
                }}>
                {formatMessage('sideBar.overview')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/web_crawlers' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Web Crawlers' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Web Crawlers');
                }}>
                {formatMessage('sideBar.webCrawlers')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/logs' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Logs' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Logs');
                }}>
                {formatMessage('sideBar.logs')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/workflows' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Workflows' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminWorkflowListFetch();
                  this.changeAlertActive('Workflows');
                }}>
                {formatMessage('sideBar.workflows')}
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/settings' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Settings' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Settings');
                }}>
                {formatMessage('sideBar.settings')}
              </button>
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }

  render() {
    const { showSidebar } = this.state;

    return (
      <nav className="c-main-nav">
        <div className={`c-main-nav__inner c-main-nav__inner--primary ${showSidebar}`}>
          <AlphaButton className="c-main-nav__close-btn" onClick={() => this.setState({ showSidebar: showSidebar === '' ? 'is-hidden' : '' })}>
            <svg width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref={SvgIconEnum.CARETLEFTCLOSE.url}></use>
            </svg>
          </AlphaButton>
          <svg className="c-main-nav__brand" width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg"><title>idetect monogram</title>
          <use xlinkHref={SvgIconEnum.IDETECTMONOGRAM.url}></use></svg>

          {/* todo  */}
          {/* have to find which class is active and have to pass the class name in li item  */}
          {/* when sub routes are added active should be highlighted with Link element */}
          <ul className="c-main-nav__list">
            <NavLink to='/dashboard/alerts'>
              <li className="c-main-nav__item js-main-nav__item1" onClick={(event) => {
                this.changeAlertActive('My Alerts');
              }}>
                <button className={`c-main-nav__button ${this.props.location.pathname.includes('/dashboard/alerts') ? 'is-active' : ''}`}>
                  <span className="c-main-nav__icon">
                    <svg className="o-icon o-icon--alert-medium">
                      <use xlinkHref={SvgIconEnum.SIDEBARALERT.url}></use>
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Dashboard
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    {formatMessage('sideBar.dashboard')}
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/analysis'>
              <li className="c-main-nav__item js-main-nav__item1" onClick={(event) => {
                this.changeAlertActive('Today');
              }}>
                <button className={`c-main-nav__button ${this.props.location.pathname.includes('/dashboard/analysis') ? 'is-active' : ''}`}>
                  <span className="c-main-nav__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                    <use xlinkHref={SvgIconEnum.SIDEBARANALYSIS.url}></use>
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Analysis
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    {formatMessage('sideBar.analysis')}
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/detection'>
              <li className="c-main-nav__item js-main-nav__item1" onClick={(event) => {
                this.changeAlertActive('Per Record');
              }}>
                <button className={`c-main-nav__button ${this.props.location.pathname.includes('/dashboard/detection') ? 'is-active' : ''}`}>
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                    <use xlinkHref={SvgIconEnum.SIDEBARDETECTION.url}></use>
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Detection
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    {formatMessage('sideBar.detection')}
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/data'>
              <li className="c-main-nav__item js-main-nav__item1" onClick={(event) => {
                this.changeAlertActive('Today');
              }}>
                <button className={`c-main-nav__button ${this.props.location.pathname.includes('/dashboard/data') ? 'is-active' : ''}`}>
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                    <use xlinkHref={SvgIconEnum.SIDEBARDATA.url}></use>
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Data
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    {formatMessage('sideBar.data')}
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/admin'>
              <li className="c-main-nav__item js-main-nav__item1" onClick={(event) => {
                this.changeAlertActive('Users');
              }}>
                <button className={`c-main-nav__button  ${this.props.location.pathname.includes('/dashboard/admin') ? 'is-active' : ''}`}>
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" width="100%" height="100%" className="o-icon">
                    <use xlinkHref={SvgIconEnum.SIDEBARADMIN.url}></use>
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Admin
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    {formatMessage('sideBar.admin')}
                  </span>
                </button>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="c-main-nav__inner c-main-nav__inner--secondary js-main-nav__inner--secondary is-visible">
          {this.props.location.pathname.includes('/dashboard/alerts') && this.renderAlerts()}
          {this.props.location.pathname.includes('/dashboard/analysis') && this.SidebarAnalysis()}
          {this.props.location.pathname.includes('/dashboard/detection') && this.SidebarDetection()}
          {this.props.location.pathname.includes('/dashboard/data') && this.renderData()}
          {this.props.location.pathname.includes('/dashboard/admin') && this.SidebarAdmin()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: RootStore) => ({
  allTreeFolderList: state.dataReducer.allTreeFolderList,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  name: state.loginReducer.userDetails.user.name
});

const SidebarConnected = connect<{}, {}, Props>(mapStateToProps, null)(Sidebar);

export const SidebarConnectedWithRouter = withRouter(SidebarConnected);
