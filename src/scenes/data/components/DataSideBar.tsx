import { BuildTreeView } from './../../../components/treeview/TreeView';
import * as React from 'react';
import { formatMessage } from './../../../common/translation/Translate';
import { ComListData } from './../../../model/com/ComListData';

interface Props {
  database: ComListData,
  lookup: ComListData,
  system: ComListData
}

export const DataSideBarTree: React.SFC<Props> = (props) => {
  return (
    <div className="c-main-nav__inner c-main-nav__inner--secondary  js-navigation-data">
      <div className="o-heading">
        <h1 className="o-heading__title"></h1>
          {formatMessage("global.data")}
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.database')}</h3>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.database)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.lookup')}</h3>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.lookup)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.system')}</h3>
        </div>
        <nav className="c-explorer">
          {BuildTreeView(props.system)} {/*TODO check in webservices if we receive three tree one for db one for lookup and for system or if we receive only one*/}
        </nav>
      </div >
    </div>);
}
