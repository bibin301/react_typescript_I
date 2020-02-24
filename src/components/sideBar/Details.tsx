import * as React from 'react';
import { formatMessage } from './../../common/translation/Translate';
import visibleTabEnum from './../../constants/SidebarEnum';
import Attribute from 'src/components/attribute/Attribute';
import Accordion from 'src/components/accordion/Accordion';
import { FormattedMessage } from 'react-intl';

interface Document { //TODO check if need more attributes
  documentName: string,
  originalFilePath: string
}

interface Comments {
  commentsLength: number,
  onCommentModal: any //Mouse Event
}

interface Props {
  uid: string,
  name: string,
  listId: string
  onDescPopover: Function,
  description: string,
  information: string,
  score: number,
  priority: number,
  createdOn: string, //TODO what do we send to this panel ? the timestamp and we calculate here the date or we calculate the date from the timestamp before sending it here
  workflowStatusDescription: string,
  visibleTab: visibleTabEnum,
  documentList: Array<Document>,
  comments: Comments,
  onFileDownload: Function,
  onFileUpload: Function,
  userId: string,
  availableLists: any //TODO
}

interface State {

}

export class Details extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  handleDownload = (filePath :string) => {
    this.props.onFileDownload(filePath);
  }

  handleUpload = (event: any) => {
    const { onFileUpload, uid, userId, availableLists } = this.props;

    onFileUpload(uid, event.target.files[0], userId, availableLists);
  }

  render() {
    const basicInfo = [
      { term: formatMessage('basicinfo.score'), value: this.props.score },
      { enableAttention: true, term: formatMessage('basicinfo.priority'), value: this.props.priority },
      { term: formatMessage('basicinfo.date'), value: this.props.createdOn },
      { term: formatMessage('basicinfo.status'), value: this.props.workflowStatusDescription }
    ];

    return(
      <div className={`c-tabs__item js-tabs-content ${this.props.visibleTab === visibleTabEnum.DETAILS ? 'is-active' : ''}`}>
        <Attribute state="default" variants="inline" term="UID-System" value={this.props.uid}></Attribute>
        <Attribute state="default" variants="inline" term="Name" value={this.props.name}></Attribute>
        <Attribute state="default" variants="inline" term="Rule Name" value={this.props.listId}></Attribute>
        <Attribute state="default" variants="truncated" term="Description" callback={this.props.onDescPopover} value={this.props.description}></Attribute>
        <Attribute state="default" variants="default" term="Information" value={this.props.information}></Attribute>
        <Accordion title="Basic informations">
          <div>
            {basicInfo.map(function(item, i) {
              <Attribute key={i} state="default" variants="inline" enableAttention={item.enableAttention} term={item.term} value={item.value}></Attribute>
            })}
          </div>
        </Accordion>
        <Accordion title="Events">
          {/* Todo: need requirement */}
        </Accordion>
        <Accordion title="Attachments">
          <div>
            {this.props.documentList.map(function (item, i) {
              <Attribute key={i} variants='inline-icon' term={item.documentName} refValue={item.originalFilePath}
                onClick={this.handleDownload} />
            })}
            <div className="upload-btn-wrapper">
              <button className="o-btn o-btn--neutral o-btn has-popover-displayed ow-expand">{formatMessage('file.upload')}</button>
              <input placeholder='upload' type='file' onChange={this.handleUpload} />
            </div>
          </div>
        </Accordion>
        <div>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn o-btn--primary" type="button">
            <FormattedMessage id={ 'alert.analysis' } />
          </button>
          <button style={{ margin: '0px 5px', float: 'left', width: '45%' }} className="o-btn u-accent-color" type="button" onClick={this.props.comments.onCommentModal}>
            <FormattedMessage id={ 'alert.comments' } /> {this.props.comments.commentsLength && `(${this.props.comments.commentsLength})`}
          </button>
        </div>
      </div>
    )
  }
}
