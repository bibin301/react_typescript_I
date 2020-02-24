import { ButtonProps, SpanListInterface, ButtonComponent } from './../buttons/ButtonComponent';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';
import * as React from 'react';
import { RootStore } from './../../store/rootReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { dispatchClickedFolder } from './../../service/data/action';

import { ComListData } from './../../model/com/ComListData';

interface FolderContent extends ComListData {
  properties: Array<SpanListInterface>
}

interface Props {
  TreeView: ComListData;
}

export const BuildTreeView = (props: ComListData) => {
  return (
    <ul className="c-tree-view js-tree-view">
      {props.children.map(function (prop, key) {
        return buildFolder(prop);
      })}
    </ul>
  );
}

interface State {
  active: boolean,
}

class HaveSubClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.buttonFunctionExpand = this.buttonFunctionExpand.bind(this);
    this.state = {
      active: false,
    }
  }

  buttonFunctionExpand() {
    this.setState({active: !this.state.active});
    dispatchClickedFolder(this.props.TreeView);
  }

  render() {
    let className = 'c-tree-view js-tree-view' + (this.state.active ? ' is-visible' : '');
    return (
            <li className={className}>
              <ButtonComponent buttonType={ButtonType.TREEVIEW} buttonVariants={ButtonVariants.TREEVIEWEXPANDABLE} buttonName={this.props.TreeView.label} buttonFunction={this.buttonFunctionExpand} contentNumber={this.props.TreeView.children.length.toString()}>
              </ButtonComponent>
              <ul className={className}>
                {this.props.TreeView.children.map(function (folderTree, key) {
                  return buildFolder(folderTree);
                })}
              </ul>
            </li>
            );
  }
}

const NoSub: React.SFC<ComListData> = (folderTree: ComListData) => {
  return (
          <li className="c-tree-view__item  js-tree-view__item">
            <ButtonComponent buttonType={ButtonType.TREEVIEW} buttonVariants={ButtonVariants.TREEVIEWFOLDER} buttonName={folderTree.label} ></ButtonComponent>
          </li>
          );
}

const buildFolder = (folderTree: ComListData) => {

  if (folderTree.isFolder) {
    return (<HaveSubClass TreeView={folderTree}></HaveSubClass>);
  } else {
    return NoSub(folderTree);
  }
}
