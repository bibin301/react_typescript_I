import * as React from 'react';
import { TopbarConnected } from './../../components/MainPage/TopbarComponent';
import { SecondaryNav } from './../../components/MainPage/SecondaryNav';
import { DataNav } from './components/DataNav';
import { ComListData } from './../../model/com/ComListData';
import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import { formatMessage } from './../../common/translation/Translate';
import { DataHeader } from './components/DataHeader';
import { DataRowCard } from './components/DataRowCard';
import { RootStore } from './../../store/rootReducer';
import { connect } from 'react-redux';

import { SidebarConnected } from './../../components/sideBar/SideBar';
import navEnum from './../../constants/NavEnum';
import { initDataList, dispatchClickedFolder } from './../../service/data/action';
import { getTree } from './../../list/management/service/action';
import { ListManagementRequestDTO } from './../../model/dto/ListManagementRequestDTO';
import { User } from './../../model/user/User';


interface State {
  active?: boolean
}

interface Props {
  loginInfoDTO: LoginInfoDTO,
  listview: boolean,
  user: User,
  tree: Array<ComListData>,
  treeClicked: ComListData
}

class data extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    initDataList("1"); //TODO switch the 1 by a value coming from loginDTO that will be in the store
    let listManagementRequestDTO = new ListManagementRequestDTO();
    listManagementRequestDTO["user"] = this.props.user;
    getTree(listManagementRequestDTO);
  }

  componentWillMount() {

  }


  render() {

      let database: ComListData;
      let lookup: ComListData;
      let system: ComListData;

      for(let i=0; i < this.props.tree.length; i++) {
        if (this.props.tree[i].id === "DLIS-1") {
          database = this.props.tree[i];
          if (this.props.treeClicked.id == undefined) {
            dispatchClickedFolder(database);
          }
        }
        if (this.props.tree[i].id === "DLIS-2") {
          lookup = this.props.tree[i];
        }
        if (this.props.tree[i].id === "DLIS-3") {
          system = this.props.tree[i];
        }
      }
      let hideStyle = {display: 'none'};
      let showStyle = {display: 'block'};

    return (
      <div className="c-main">
        <nav className="c-main-nav js">
          <SecondaryNav data={true}></SecondaryNav>
          <DataNav database={database} lookup={lookup} system={system}></DataNav>
        </nav>
        <div className="c-content">
          <TopbarConnected loginInfoDTO={this.props.loginInfoDTO} title={formatMessage('global.data')} userMenuOpen={false}></TopbarConnected>
          <div className="c-content__view">
            <div className="c-content__inner-wrapper">
              <DataHeader></DataHeader>
              <div className="c-content__scrollable js-content-scrollable" style={this.props.listview? showStyle: hideStyle} >
              <DataRowCard folderTree={this.props.treeClicked}></DataRowCard>
              </div>
              <div className="c-content__view--table js-table-view" style={this.props.listview? hideStyle: showStyle}>
                Here should lie the tableView when it is done
              </div>
            </div>
            <SidebarConnected navEnum={navEnum.DATA}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootStore) => ({
  listview: state.commonReducer.listView,
  user: state.loginReducer.userDetails.user,
  tree: state.listReducer.allTreeFolderList,
  treeClicked: state.dataReducer.treeClicked,
  loginInfoDTO: state.loginReducer.userDetails
});

export const DataDashboard = connect(mapStateToProps,null)(data);
