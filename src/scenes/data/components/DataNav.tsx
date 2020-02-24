import { BuildTreeView } from './../../../components/treeview/TreeView';
import { ComListData } from './../../../model/com/ComListData';
import * as React from 'react';
import { formatMessage } from './../../../common/translation/Translate';
import { ButtonComponent } from './../../../components/buttons/ButtonComponent';
import ButtonType from './../../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../../constants/buttons/ButtonVariantEnum';
import icon from './../../../constants/icons/IconsEnum';

interface Props {
  database: ComListData,
  lookup: ComListData,
  system: ComListData
}

export const DataNav: React.SFC<Props> = (props) => {
  return (
    <div className="c-main-nav__inner c-main-nav__inner--secondary  js-navigation-data">
      <div className="o-heading">
        <h1 className="o-heading__title">{formatMessage('global.data')}</h1>
        <ButtonComponent buttonName={formatMessage('global.search')} buttonIcon={icon.SEARCHICON} buttonType={ButtonType.TRANSPARENT} buttonVariants={ButtonVariants.ICONONLY}></ButtonComponent>
        <ButtonComponent buttonName={formatMessage('global.export')} buttonIcon={icon.EXPORT} buttonType={ButtonType.TRANSPARENT} buttonVariants={ButtonVariants.ICONONLY}></ButtonComponent>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.database')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {props.database? BuildTreeView(props.database) : ''}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.lookup')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {props.lookup? BuildTreeView(props.lookup) : ''}
        </nav>
      </div>
      <div className="c-main-nav__submenu">
        <div className="c-explorer-header">
          <h3 className="c-explorer-header__title">{formatMessage('data.system')}</h3>
          <ButtonComponent buttonName={formatMessage('global.add')} buttonIcon={icon.ADD} buttonType={ButtonType.NEUTRAL} buttonVariants={ButtonVariants.ICONONLY} toolTipLabel={formatMessage('global.add')}></ButtonComponent>
        </div>
        <nav className="c-explorer">
          {props.system? BuildTreeView(props.system) : ''}
        </nav>
      </div >
    </div>);
}
