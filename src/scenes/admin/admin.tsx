import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as $ from 'jquery';
import {
  pick as _pick,
  values as _values,
  find as _find,
  assign as _assign,
  map as _map,
  noop as _noop,
  update as _update,
  sortBy as _sortBy,
  reverse as _reverse
} from 'lodash';
import { RootStore } from './../../store/rootReducer';

import GridCard from './../../components/GridCard/GridCard';
import OrgGrid from './../../components/OrgGrid/OrgGrid';
import AdminGrid from './component/adminGrid';
import AdminTable from './component/adminTable';
import RadioBtnGrp from './../../components/radioBtnGrp/RadioBtnGrp';
import DestrutiveModal from './../../components/modal/DestrutiveModal';
import SimpleFilter from './../../components/filter/SimpleFilter';
import { formatMessage } from './../../common/translation/Translate';

import RiskAllocation from './../../components/riskAllocation/RiskAllocation';
import Logs from './component/Logs';
import LogsCatagory from './component/LogsCatagory';
import EditUserModal from './component/EditUserModal';
import EditRolesModal from './component/EditRolesModal';
import DeleteRolesModal from './component/DeleteRolesModal';
import EditGroupsModal from './component/EditGroupsModal';
import DeleteGroupsModal from './component/DeleteGroupsModal';
import AddGroupModel from './component/AddGroupModel';
import AddOrgUnitModel from './component/AddOrgUnitModel';
import EditOrgUnit from './component/EditOrgUnit';
import AddRolesModal from './component/AddRoleModal';
import EditSchedulerModal from './component/EditSchedulerModal';


import {
  getAllAdminUserList,
  // getAllAdminGroupList,
  // getAllAdminRoleList,
  // getAllAdminRisksList,
  // getAllAdminOrgUnitList,
  riskMergeRequest,
  getAdminCategoryHistory,
  getLookupCountryData,
  deleteReqForAdminUser,
  getAllAdminGroupList,
  getAllAdminRoleList,
  getAdminRolesSecurity,
  getUserGroups,
  getAdminOrgUnitHistory,
  deleteAdminOrgUnit,
  editScheduleToModify,
  addGroupToModify,
  addGroupdelete
} from './../../service/admin/action';

import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

// Note: value of low is no need to RiskAllocation comp
const riskLevelAlert = [
  // 'low',
  'guarded', 'elevated', 'high', 'severe'];
const riskLevelFlag = [
  // 'overallRiskLow',
  'overallRiskGuarded', 'overallRiskElevated', 'overallRiskHigh', 'overallRiskSevere'];

const sortMeta = {
  userSort: {
    name: 'Name',
    first_name: 'Full Name',
    phone: 'Phone',
    email: 'E-mail',
    active: 'Active'
  },
  groupSort: {
    name: 'Name',
    description: 'Description',
    active: 'Active'
  },
  roleSort: {
    name: 'Name',
    description: 'Description',
    active: 'Active'
  }
}


const mapStateToProps = (state: RootStore) => ({
  orgUnitId: state.loginReducer.orgUnitId,
  userUpdateHistory: state.adminReducer.userUpdateHistory,
  userUpdateSecurity: state.adminReducer.userUpdateSecurity,
  availableLists: state.loginReducer.availableLists,
  adminModifyingUser: state.adminReducer.adminModifyingUser,
  adminScheduleModify: state.adminReducer.adminScheduleModifying,
  adminModifyingGroup: state.adminReducer.adminModifyingGroup,
  adminDeleteGroup: state.adminReducer.adminDeleteGroup,
  lookupCountryList: state.adminReducer.lookupCountryList,
  availablePerms: state.loginReducer.availablePerms,
  adminLogsByCatagory: state.adminReducer.adminLogsByCatagory,
  adminLogsByCatagoryCount: state.adminReducer.adminLogsByCatagoryCount,
  adminDataList: state.adminReducer.adminDataList,
  adminRiskList: state.adminReducer.adminRiskList,
  id: state.loginReducer.userDetails.user.id,
  userId: state.loginReducer.userDetails.user.userId,
  userName: state.loginReducer.userDetails.user.name,
  adminOrgUnitList: state.adminReducer.adminOrgUnitList,
  isLoading: state.commonReducer.isLoading,
  user: state.loginReducer.userDetails.user
})

interface Props {
  orgUnitId: number,
  lookupCountryList: any,
  userUpdateHistory: any,
  userUpdateSecurity: any,
  availableLists: any,
  adminModifyingGroup: any,
  adminDeleteGroup: any,
  adminDataList: any,
  adminScheduleModify: any,
  adminRiskList: any,
  adminOrgUnitList: any,
  availablePerms: number[],
  adminLogsByCatagory: any,
  adminLogsByCatagoryCount: number,
  riskMergeRequest: any,
  id: number,
  userId: string,
  userName: string,
  isLoading: boolean,
  adminModifyingUser: any,
  user: any
}

interface State {
  isParametersVisible: boolean,
  isRisksVisible: boolean,
  editingUserId: number,
  editScheduleId: number,
  deletingUserId: number,
  userSort: {
    sortBy: string,
    sortOrder: string
  },
  groupSort: {
    sortBy: string,
    sortOrder: string
  },
  roleSort: {
    sortBy: string,
    sortOrder: string
  },
  isEditUser: boolean,
  isDelete: boolean,
  isDuplicatUser: boolean,
  modifyingUser: any,
  disableUserHistory: boolean,
  isEditRoles: boolean,
  isDeleteRoles: boolean,
  adminModifyingUser: any
  isEditOrgUnit: boolean,
  isEditGroups: boolean,
  isEditScheduler: boolean,
  isDeleteGroups: boolean,
  attributeList: any,
  isAddGroups: boolean,
  isAddOrgUnit: boolean,
  isAddRoles: boolean
}

class AdminDashboard extends React.Component<Props, State> {
  public _riskLevel: any;
  public _riskLevelID: any;
  public _riskLevelName: any;
  public node: any;
  public _destructiveModal: any = {
    title: null,
    header: null,
    term: null,
    value: null,
    onCancel: _noop,
    onDelete: _noop
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isParametersVisible: false,
      isEditUser: false,
      isDelete: false,
      isDuplicatUser: false,
      modifyingUser: null,
      adminModifyingUser: null,
      disableUserHistory: false,
      isEditRoles: false,
      isDeleteRoles: false,
      isEditOrgUnit: false,
      isEditGroups: false,
      isDeleteGroups: false,
      isEditScheduler: false,
      isAddGroups: false,
      isAddOrgUnit: false,
      isAddRoles: false,
      userSort: {
        sortBy: 'name',
        sortOrder: 'asc'
      },
      groupSort: {
        sortBy: 'name',
        sortOrder: 'asc'
      },
      roleSort: {
        sortBy: 'name',
        sortOrder: 'asc'
      },
      editingUserId: null,
      deletingUserId: null,
      editScheduleId: null,
      isRisksVisible: false,
      attributeList: []
    }

  }

  componentDidMount() {
    const { userId } = this.props;
    getAllAdminUserList(userId, this.state.userSort);
    getLookupCountryData();
  }

  public toggleRisksVisible = (riskLevel: any, id: any, name: any) => {
    this._riskLevel = riskLevel;
    this._riskLevelID = id;
    this._riskLevelName = name;
    this.setState({ isRisksVisible: !this.state.isRisksVisible }, this.toggleHasVeil);
  };

  private toggleHasVeil = () => {
    const { isRisksVisible, isEditUser, isEditOrgUnit, isDelete, isEditRoles, isAddOrgUnit, isDeleteRoles, isEditGroups, isDeleteGroups, isAddGroups, isAddRoles, isEditScheduler } = this.state;
    if (isRisksVisible || isEditUser || isEditRoles || isAddOrgUnit || isEditOrgUnit || isDeleteRoles || isDelete || isEditGroups || isDeleteGroups || isAddGroups || isAddRoles || isEditScheduler) {
      $('body').addClass('has-veil');
    } else {
      $('body').removeClass('has-veil');
    }
  };

  private hideEditUserModal = () => {
    this.setState({ isEditUser: false }, this.toggleHasVeil)
  }

  private hideEditRolesModal = () => {
    this.setState({ isEditRoles: false }, this.toggleHasVeil)
  }

  private hideDeleteRolesModal = () => {
    this.setState({ isDeleteRoles: false }, this.toggleHasVeil)
  }
  private hideEditGroupsModal = () => {
    this.setState({ isEditGroups: false }, this.toggleHasVeil)
  }

  private hideDeleteGroupsModal = () => {
    this.setState({ isDeleteGroups: false }, this.toggleHasVeil)
  }
  private hideToggle = () => {
    this.setState({ isRisksVisible: false }, this.toggleHasVeil);
  }

  public setAddOrgUnit = () => {
    this.setState({ isAddOrgUnit: true }, this.toggleHasVeil);
  }

  public addGroup = () => {
    this.setState({ isAddGroups: true }, this.toggleHasVeil);
  }

  public addRoles = () => {
    this.setState({ isAddRoles: true }, this.toggleHasVeil)
  }

  private hideAddRolesModal = () => {
    this.setState({ isAddRoles: false }, this.toggleHasVeil);
  }

  private hideAddGroupsModal = () => {
    this.setState({ isAddGroups: false }, this.toggleHasVeil);
  }
  private hideEditSchedulerModal = () => {
    this.setState({ isEditScheduler: false }, this.toggleHasVeil);
  }
  private updateRiskLevel(keys, vals) {
    _map(keys, (key, i) => (this._riskLevel[key] = vals[i]));
  }

  private handleRiskAllocationSubmit = () => {
    const { userId } = this.props;
    riskMergeRequest(userId, this._riskLevelID, this._riskLevelName, this._riskLevel);
    this.hideToggle();
  }

  private riskPopOver = () => {
    return (
      this.state.isRisksVisible && <div className='c-modal js-modal'>
        <div className="c-modal__view">
          <div className="c-modal__head">
            <legend className="c-modal__title">
              {formatMessage('admin.manageRisks')}
            </legend>
          </div>
          <div className="c-modal__body">
            <RiskAllocation
              varients='labelled'
              title='Alerts colors'
              onChange={(val) => this.updateRiskLevel(riskLevelAlert, val)}
              defaultValue={_values(_pick(this._riskLevel, riskLevelAlert))} />
            <RiskAllocation
              varients='labelled'
              title='Flags colors'
              onChange={(val) => this.updateRiskLevel(riskLevelFlag, val)}
              defaultValue={_values(_pick(this._riskLevel, riskLevelFlag))} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <button className="o-btn js-close-modal" onClick={this.hideToggle} type="button">
                {formatMessage('global.cancel')}
              </button>
            </div>
            <div className="c-modal__actions">
              <button className="o-btn o-btn--primary" onClick={this.handleRiskAllocationSubmit}>
                {formatMessage('global.save')}
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  private userActionModify = (getID: number) => {
    const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: getID });
    getAdminCategoryHistory(getID, this.props.userId, currentUserDetails['name'], "USER");
    this.setState({ isEditUser: true, modifyingUser: currentUserDetails, disableUserHistory: false, isDuplicatUser: false }, () => {
      this.toggleHasVeil();
    });
  };
  private schedulerActionModify = (getID: number) => {
    const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: getID });
    getAdminCategoryHistory(getID, this.props.userId, this.props.userName, currentUserDetails['name']);
    this.setState({ isEditScheduler: true, modifyingUser: currentUserDetails, disableUserHistory: false, isDuplicatUser: false }, () => {
      this.toggleHasVeil();
    });
  }

  private orgUnitModify = (getID: number) => {
    const currentOrgUnit = _find(_assign({}, this.props.adminOrgUnitList), {id: getID})
    getAdminOrgUnitHistory(this.props.user, currentOrgUnit['auditId']);
    console.log('cli id..', getID, currentOrgUnit)
    this.setState({ isEditOrgUnit: true, adminModifyingUser: currentOrgUnit }, this.toggleHasVeil);
  }

  private orgUnitDelete = (getID: number) => {
    const currentUserDetails = _find(_assign({}, this.props.adminOrgUnitList), { id: getID });

    this._destructiveModal = { 
      title: 'Delete Organization Unit',
      header: 'Are you sure want to delete this Organization Unit?',
      term: currentUserDetails['name'],
      value: currentUserDetails['code'] + ' \n' + currentUserDetails['email'] + ' \n Last Update Date is   ' + currentUserDetails['updatedOn'],
      onCancel: () => this.setState({ isDelete: false }, this.toggleHasVeil),
      onDelete: () => this.setState({ isDelete: false }, () => {
        deleteAdminOrgUnit( currentUserDetails, this.props.user);
        this.toggleHasVeil();
      }),
    }

    this.setState({ isDelete: true }, this.toggleHasVeil)
  }

  private roleActionModify = (getID: number) => {
    const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: getID });
    getAdminCategoryHistory(getID, this.props.userId, currentUserDetails, "ROLE");
    getAdminRolesSecurity(this.props.userId);
    // getAdminCategoryHistory(getID, this.props.userId, this.props.userName, currentUserDetails['name']);
    // this.setState({ isEditUser: true, modifyingUser: currentUserDetails, disableUserHistory: false, isDuplicatUser: false }, () => {
    //   this.toggleHasVeil();
    // });
  };

  private userActionDuplicate = (getID: number) => {
    // note: as of user duplication requirement 
    const modifyingUser = _update(_update(_find(_assign({}, this.props.adminDataList), { id: getID }), 'userId', val => val + 'copy'), 'name', val => val + 'copy');
    this.setState({ isEditUser: true, modifyingUser: modifyingUser, disableUserHistory: true, isDuplicatUser: true }, () => {
      this.toggleHasVeil();
    });
  }

  private userActionDelete = (getID: number) => {
    const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: getID });

    this._destructiveModal.title = 'Delete User';
    this._destructiveModal.header = 'Are you sure want to delete this user?';
    this._destructiveModal.term = currentUserDetails['name'];
    this._destructiveModal.value = currentUserDetails['fullName'] + ' \n' + currentUserDetails['email'] + ' \n Last Update Date is   ' + currentUserDetails['updatedOn'];
    this._destructiveModal.onCancel = () => this.setState({ isDelete: false }, this.toggleHasVeil);
    this._destructiveModal.onDelete = () => this.setState({ isDelete: false },
      () => {
        deleteReqForAdminUser(getID, currentUserDetails['userId'], this.props.id, this.props.userId);
        this.toggleHasVeil();
      });

    this.setState({ isDelete: true }, this.toggleHasVeil)
  }
  private userFilterSubmit = (filters) => {
    // Todo: improve the filter
    let filterCritUser = {};
    _map(filters.filters, (each, i) => {
      filterCritUser[each.field]= each.value;
      filterCritUser["triActive"] = 0;
      filterCritUser[each.field] = each.value
    });
    getAllAdminUserList(this.props.userId, this.state.userSort, { filterType: filters.filters[0].filterType, filterCritUser });
  }
  private groupFilterSubmit = (filters) => {
    // Todo: improve the filter
    let group = {};
    _map(filters.filters, (each, i) => {
      group[each.field]= each.value
      group["triActive"] = 0;
      group[each.field] = each.value
    });
    getAllAdminGroupList(this.props.userId, { filterType: filters.filters[0].filterType, group });
  }
  private roleFilterSubmit = (filters) => {
    // Todo: improve the filter
    let role = {};
    _map(filters.filters, (each, i) => {
      role[each.field]= each.value;
      role["triActive"] = 0;
      role[each.field] = each.value
    });
    getAllAdminRoleList(this.props.userId, { filterType: filters.filters[0].filterType, role });
  }
  private userFilterPopver = (): JSX.Element => {
    const userFields = [
      {
        label: 'User Name',
        value: 'name',
        type: 'String'
      },
      {
        label: 'Full Name',
        value: 'last_name',
        type: 'String'
      },
      {
        label: 'Phone',
        value: 'phone',
        type: 'String'
      },
      {
        label: 'Email',
        value: 'email',
        type: 'String'
      },
      {
        label: 'Active',
        value: 'active',
        type: 'Select'
      }
    ]
    return (<SimpleFilter
      fields={userFields}
      filterSubmit={this.userFilterSubmit} />
    );
  }
  private groupFilterPopver = (): JSX.Element => {
    const groupFields = [
      {
        label: 'Group Name',
        value: 'name',
        type: 'String'
      },
      {
        label: 'Description',
        value: 'description',
        type: 'String'
      },
      {
        label: 'Active',
        value: 'active',
        type: 'Select'
      }
    ]
    return (<SimpleFilter
      fields={groupFields}
      filterSubmit={this.groupFilterSubmit} />
    );
  }
  private roleFilterPopver = (): JSX.Element => {
    const roleFields = [
      {
        label: 'Role Name',
        value: 'name',
        type: 'String'
      },
      {
        label: 'Description',
        value: 'description',
        type: 'String'
      },
      {
        label: 'Active',
        value: 'active',
        type: 'Select'
      }
    ]
    return (<SimpleFilter
      fields={roleFields}
      filterSubmit={this.roleFilterSubmit} />
    );
  }

  private sortPopover = (sortType: string): JSX.Element => {
    const { [sortType]: { sortBy, sortOrder } } = this.state;

    return (
      <div className={`c-popover js-popover is-ready`}>
        <div className="c-modal__body">
          <div className="g-radio-buttons">
            <ul className="g-list g-list--borders">
              <li className="g-list__item">
                <RadioBtnGrp
                  // TODO : Need to maintain entityId as const
                  keyValues
                  radioList={sortMeta[sortType]}
                  asChecked={sortBy}
                  onChange={(event) => {
                    const val = { sortBy: event.target.value, sortOrder };
                    this.setState({ [sortType]: val }, () =>
                      sortType === 'userSort' && getAllAdminUserList(this.props.userId, this.state.userSort))
                  }} />
              </li>
              <li className="g-list__item">
                <RadioBtnGrp
                  keyValues
                  radioList={{
                    asc: 'Ascending',
                    desc: 'Descending'
                  }}
                  asChecked={sortOrder}
                  onChange={(event) => {
                    const val = { sortOrder: event.target.value, sortBy };
                    this.setState({ [sortType]: val }, () => 
                      sortType === 'userSort' && getAllAdminUserList(this.props.userId, this.state.userSort))
                  }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };


  render() {
    const { adminDataList, adminRiskList, adminOrgUnitList, isLoading, user, adminLogsByCatagory, adminLogsByCatagoryCount, availablePerms,
      availableLists, orgUnitId, userUpdateHistory, userUpdateSecurity, adminScheduleModify, lookupCountryList, id, userId, userName, adminDeleteGroup,
      adminModifyingGroup } = this.props;
    const { attributeList, isEditUser, adminModifyingUser, isEditRoles, isDeleteRoles, isEditOrgUnit, isAddOrgUnit,
      isDelete, modifyingUser, disableUserHistory, groupSort, roleSort, isDuplicatUser , isEditGroups, isAddGroups, isDeleteGroups, isAddRoles, isEditScheduler } = this.state;

    const fetchAttribute = (index) => {
      this.setState({ attributeList: adminDataList[index].listOfFields });
    }
    const usersOptions = [
      {
        action: _noop,
        svg: SvgIconEnum.FILTER.url,
        label: 'filter',
        popover: this.userFilterPopver,
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.SORT.url,
        label: 'sort',
        popover: () => this.sortPopover('userSort'),
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.LIST.url,
        action1: _noop,
        svg1: SvgIconEnum.LISTALT.url,
        multiButton: true
      },
      {
        action: _noop,
        svg: SvgIconEnum.SIDEBAR.url,
        multiButton: false
      }
    ];

    const data = [
      
       { "id": 518,
        "jobId": 4,
         "name": "INDEX_OPS_ALERT",
          "description": "test",
           "cronExpression": "0 0 0 ? * *", 
           "activated": false, "serverName": 
           "SebScheduler"}
               
                                                                            
    ]
    const groupsOptions = [
      {
        action: _noop,
        svg: SvgIconEnum.FILTER.url,
        label: 'filter',
        popover: this.groupFilterPopver,
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.SORT.url,
        label: 'sort',
        popover: () => this.sortPopover('groupSort'),
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.LIST.url,
        action1: _noop,
        svg1: SvgIconEnum.LISTALT.url,
        multiButton: true
      },
      {
        action: _noop,
        svg: SvgIconEnum.SIDEBAR.url,
        multiButton: false
      }
    ];
    const rolesOptions = [
      {
        action: _noop,
        svg: SvgIconEnum.FILTER.url,
        label: 'filter',
        popover: this.roleFilterPopver,
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.SORT.url,
        label: 'sort',
        popover: () => this.sortPopover('roleSort'),
        multiButton: false,
        highLight: false
      },
      {
        action: _noop,
        svg: SvgIconEnum.LIST.url,
        action1: _noop,
        svg1: SvgIconEnum.LISTALT.url,
        multiButton: true
      },
      {
        action: _noop,
        svg: SvgIconEnum.SIDEBAR.url,
        multiButton: false
      }
    ];
    const risksOptions = [
      {
        action: _noop,
        svg: SvgIconEnum.FILTER.url,
        label: 'filter',
        multiButton: false,
        highLight: true
      },
      {
        action: _noop,
        svg: SvgIconEnum.LIST.url,
        action1: _noop,
        svg1: SvgIconEnum.LISTALT.url,
        multiButton: true
      },
      {
        action: _noop,
        svg: SvgIconEnum.SIDEBAR.url,
        multiButton: false
      }
    ];

    const commonAction = [
      {
        onClick: _noop,
        label: 'validate'
      },
      {
        onClick: _noop,
        label: 'properties'
      },
      {
        onClick: _noop,
        label: 'history'
      },
      {
        onClick: _noop,
        label: 'duplicate'
      },
      {
        onClick: _noop,
        label: 'delete'
      },
    ];

    const schedulerAction = [
      {
        onClick: _noop,
        label: 'start'
      },
      {
        onClick: _noop,
        label: 'stop'
      },
      {
        onClick: _noop,
        label: 'duplicate'
      },
      {
        onClick: (id) => {
          this.schedulerActionModify(id); 
          editScheduleToModify(id); 
           getAdminCategoryHistory(id, this.props.userId, _find(adminDataList, { id })['name'], "SCHEDULEDJOB"); //on server issue
          this.setState({ isEditScheduler: true, editScheduleId: id }, () => {
            this.toggleHasVeil();
          });
        },
        label: 'edit'
      },
      {
        onClick: _noop,
        label: 'delete'
      },
    ]

    const usersAction = [
      {
        onClick: this.userActionModify,
        label: 'modify'
      },
      {
        onClick: this.userActionDuplicate,
        label: 'duplicate'
      },
      {
        onClick: this.userActionDelete,
        label: 'delete'
      },
    ];

    const groupsAction = [
      {
        onClick: (id) => {
          addGroupToModify(id);
          getUserGroups(id, this.props.userId, _find(adminDataList, { id })['name']);
          this.setState({ isEditGroups: true, editingUserId: id }, () => {
            this.toggleHasVeil();
          });
        },
        label: 'edit'
      },
      {
        onClick: (id) => {
          addGroupdelete(id);
          getUserGroups(id, this.props.userId, _find(adminDataList, { id })['name']);
          this.setState({ isDeleteGroups: true, deletingUserId: id }, () => {
            this.toggleHasVeil();
          });
        },
        label: 'delete'
      }
    ]

    const workflowAction = [
      {
        onClick: _noop,
        label: 'modify'
      },
      {
        onClick: _noop,
        label: 'delete'
      }
    ];

    const rolesAction = [
      {
        onClick: (id) => {
          const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: id });
          this.roleActionModify(id);
          this.setState({ isEditRoles: true, editingUserId: id, adminModifyingUser: currentUserDetails }, () => {
            this.toggleHasVeil();
          });
        },
        label: 'modify'
      },
      {
        onClick: (id) => {
          const currentUserDetails = _find(_assign({}, this.props.adminDataList), { id: id });
          this.roleActionModify(id);
          this.setState({ isDeleteRoles: true, deletingUserId: id, adminModifyingUser: currentUserDetails }, () => {
            this.toggleHasVeil();
          });
        },
        label: 'delete'
      }
    ];
   
    const orgUnitAction = [
      {
        onClick: this.orgUnitModify,
        label: 'modify'
      },
      {
        onClick: this.orgUnitDelete,
        label: 'delete'
      }
    ];
    
    const renderEditUserModal = isEditUser && <EditUserModal
      activeUserID={userId}
      activeID={id}
      activeUserName={userName}
      isDuplicatUser={isDuplicatUser}
      disableHistory={disableUserHistory}
      availableLists={availableLists}
      orgUnitId={orgUnitId}
      availablePerms={availablePerms}
      userUpdateHistory={userUpdateHistory}
      onHide={this.hideEditUserModal}
      lookupCountryList={lookupCountryList}
      general={modifyingUser} />;

    const renderEditRolesModal = isEditRoles && <EditRolesModal
      userId={userId}
      availableLists={availableLists}
      orgUnitId={orgUnitId}
      availablePerms={availablePerms}
      userUpdateHistory={userUpdateHistory}
      userUpdateSecurity={userUpdateSecurity}
      adminDataList={adminDataList}
      onHide={this.hideEditRolesModal}
      general={adminModifyingUser} />;

    const renderDeleteRolesModal = isDeleteRoles && <DeleteRolesModal
      userId={userId}
      availableLists={availableLists}
      orgUnitId={orgUnitId}
      availablePerms={availablePerms}
      userUpdateHistory={userUpdateHistory}
      adminDataList={adminDataList}
      onHide={this.hideDeleteRolesModal}
      general={adminModifyingUser} />;

    const renderEditGroupsModel = isEditGroups && <EditGroupsModal
      onHide={this.hideEditGroupsModal}
      userUpdateHistory={userUpdateHistory}
      general={adminModifyingGroup}
      user={user}
    />;

    const renderdeleteGroupsModel = isDeleteGroups && <DeleteGroupsModal
      onHide={this.hideDeleteGroupsModal}
      general={adminDeleteGroup}
      user={user}
    />;

    const renderaddGroupsModel = isAddGroups && <AddGroupModel
      onHide={this.hideEditSchedulerModal}
      user={user}
    />;
    const renderEditSchedulerModel = isEditScheduler && <EditSchedulerModal
      general={adminScheduleModify}
      onHide={this.hideEditSchedulerModal}
      userUpdateHistory={userUpdateHistory}
      user={user}
    />;

    const renderAddOrgUnit = isAddOrgUnit && <AddOrgUnitModel
      onHide={() => this.setState({ isAddOrgUnit: false }, this.toggleHasVeil)}
      user={user}
    />;

    const renderEditOrgUnit = isEditOrgUnit && <EditOrgUnit
      history={this.props.userUpdateHistory}
      data={adminModifyingUser}
      onHide={() => this.setState({ isEditOrgUnit: false }, this.toggleHasVeil)}
      user={user}
    />;

    const renderaddRolesModel = isAddRoles && <AddRolesModal
      onHide={this.hideAddRolesModal}
      user={user}
    />;

    return (
      <div className="c-content__view js-content__view">
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {this.riskPopOver()}
        {renderEditUserModal}
        {
          isDelete && <DestrutiveModal
            title={this._destructiveModal.title}
            header={this._destructiveModal.header}
            term={this._destructiveModal.term}
            value={this._destructiveModal.value}
            onCancel={this._destructiveModal.onCancel}
            onDelete={this._destructiveModal.onDelete} />
        }
        {renderEditRolesModal}
        {renderDeleteRolesModal}
        {renderEditGroupsModel}
        {renderdeleteGroupsModel}
        {renderAddOrgUnit}
        {renderEditOrgUnit}
        {renderaddGroupsModel}
        {renderaddRolesModel}
        {renderEditSchedulerModel}
    <Switch>
      <Redirect exact path="/dashboard/admin" to="/dashboard/admin/users" />
      <Route exact path="/dashboard/admin/users" render={() => <GridCard adminDataList={adminDataList} svgIcon={SvgIconEnum.PERSONMEDIUM.url} addButton={formatMessage('admin.addUser')} optionItems={usersOptions} actionItems={usersAction} label='name' description='fullName' />} />
      <Route exact path="/dashboard/admin/groups" render={() => <GridCard adminDataList={groupSort.sortOrder === 'desc' ? _reverse(_sortBy(adminDataList, groupSort.sortBy)) : _sortBy(adminDataList, groupSort.sortBy)} svgIcon={SvgIconEnum.PEOPLEMEDIUM.url} addButton={formatMessage('admin.addGroup')} optionItems={groupsOptions} actionItems={groupsAction} label='name' description='description' onClick={this.addGroup} />} />
      <Route exact path="/dashboard/admin/roles" render={() => <GridCard adminDataList={roleSort.sortOrder === 'desc' ? _reverse(_sortBy(adminDataList, roleSort.sortBy)) : _sortBy(adminDataList, roleSort.sortBy)} svgIcon={SvgIconEnum.ROLEMEDIUM.url} addButton={formatMessage('admin.addRole')} optionItems={rolesOptions} actionItems={rolesAction} label='name' description='description' onClick={this.addRoles}/>} />
      <Route exact path="/dashboard/admin/organization_units" render={() => <OrgGrid adminDataList={adminOrgUnitList} isOrgUnit addButton={formatMessage('admin.addOrganization')} optionItems={orgUnitAction} addAction={this.setAddOrgUnit} />} />
      <Route exact path="/dashboard/admin/risks" render={() => <GridCard adminDataList={adminRiskList} toggleRisksVisible={this.toggleRisksVisible} isRisk svgIcon={SvgIconEnum.RISK.url} optionItems={risksOptions} actionItems={commonAction} label='name' />} />
      <Route exact path="/dashboard/admin/logical_views" render={() => <AdminGrid adminDataList={adminDataList} fetchAttribute={fetchAttribute} />} />
      <Route exact path="/dashboard/admin/logical_views/attribute" render={() => <AdminTable attributeList={attributeList} />} />
      <Route exact path="/dashboard/admin/scheduler" render={() => <GridCard adminDataList={adminDataList} svgIcon={SvgIconEnum.TIMERMEDIUM.url} addButton={formatMessage('admin.newJob')} optionItems={usersOptions} actionItems={schedulerAction} label='name' description='description' />} />
      <Route exact path="/dashboard/admin/overview" render={() => <div> {formatMessage('global.wip')} </div>} />
      <Route exact path="/dashboard/admin/web_crawlers" render={() => <div> {formatMessage('global.wip')} </div>} />
      <Route exact path="/dashboard/admin/logs" render={() => <Logs availablePerms={availablePerms} />} />
      <Route exact path="/dashboard/admin/logs/security_log" render={() => <LogsCatagory logFor='SECURITY' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/genaral_log" render={() => <LogsCatagory logFor='GENERAL' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/user_action_log" render={() => <LogsCatagory logFor='USERACTION' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/application_log" render={() => <LogsCatagory logFor='APPLICATION' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/crawler_log" render={() => <LogsCatagory logFor='CRAWLER' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/realtime_log" render={() => <LogsCatagory logFor='REALTIME' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/logs/swift_log" render={() => <LogsCatagory logFor='SWIFT' logs={adminLogsByCatagory} logsCount={adminLogsByCatagoryCount} />} />
      <Route exact path="/dashboard/admin/workflows" render={() => <GridCard adminDataList={adminDataList} svgIcon={SvgIconEnum.WORKFLOWMEDIUM.url} addButton={formatMessage('admin.addWorkFlow')} optionItems={usersOptions} actionItems={workflowAction} label='name' description='description' />} />
      <Route exact path="/dashboard/admin/settings" render={() => <div> {formatMessage('global.wip')} </div>} />
    </Switch>
      </div >
    )
  }
}

/* eslint-disable */
export default connect(
  mapStateToProps,
  null
)(AdminDashboard as any) 