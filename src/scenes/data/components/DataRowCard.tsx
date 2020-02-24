import * as React from 'react';
import { RowCard } from './../../../components/rowCard/RowCard';
import icon from './../../../constants/icons/IconsEnum';
import { RootStore } from './../../../store/rootReducer';
import { connect } from 'react-redux';
import { dispatchClickedFolder } from './../../../service/data/action';
import { ComListData } from './../../../model/com/ComListData';


interface dataRowCardProps {
  folderTree: ComListData
}


export class DataRowCard extends React.Component<dataRowCardProps> {
  constructor(props: dataRowCardProps) {
    super(props);
    //this.onDoubleClickFunction = this.onDoubleClickFunction.bind(this);
  }

  onclickFunction() {

  }

  render() {
    let folderName: string;
    if (this.props.folderTree) {
      folderName = this.props.folderTree.label;
    }
    console.log(this.props);

    return (
      <div>
        {this.props.folderTree.children?
          this.props.folderTree.children.map(function (props, index) {
            return (<RowCard badgeInterface={{badge: false}} checkboxId={props.label + '_' + index} checkboxName={props.label} title={props.label} icon={props.isFolder? icon.FOLDER : icon.FOLDER} label={folderName} tree={props} isFolder={props.isFolder}></RowCard>);
          }):
         ''}
      </div>
    );
  }
}
