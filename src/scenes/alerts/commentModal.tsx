import * as React from 'react';
import {noop as _noop, map as _map} from 'lodash';

import TextField from 'src/components/textField/TextField';
import Comment from 'src/components/comment/Comment';
import { formatMessage } from './../../common/translation/Translate';

interface Props {
  state?: string,
  varients?: string,
  title: string,
  author: string,
  isOpen: boolean,
  comments: any,
  changeVisbility: any,
  handleSubmit: any
}

interface State {
  newComment: string
}

export default class Modal extends React.Component <Props, State>{
  state = { newComment: '' }
  resetState = this.state;

  public static defaultProps: Partial<Props> = {
    state: 'default',
    varients: 'default',
    title: '',
    author: '',
    comments: [],
    isOpen: false,
    changeVisbility: _noop,
    handleSubmit: _noop
};
  onChange = (event) => {
    this.setState({ newComment: event.target.value })
  }

  submit = () => {
    !!this.state.newComment && this.props.handleSubmit(this.state.newComment);
    this.setState(this.resetState);
    // this.props.changeVisbility();
  }

  render() {
    const { newComment } = this.state;
    const { title, comments, author, changeVisbility, isOpen } = this.props;

    return (
      isOpen && <div className="c-modal">
        <div className="c-modal__view">
          <div className="c-modal__head">
            <legend className="c-modal__title">
              {title}
            </legend>
          </div>
          <div className="c-modal__body">
            <div style={{ 'height': '300px', 'overflowY': 'scroll' }}>
              {_map(comments, (item, i) => (
                <Comment key={i} comment={item.comment} date={item.updatedOn} author={author} />
              ))}
            </div>
            <TextField name="comment" varients="comment-box" value={newComment} onChange={this.onChange} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <button className="o-btn u-accent-color" type="button" onClick={changeVisbility}>
                {formatMessage('global.cancel')}
              </button>
            </div>
            <div className="c-modal__actions">
              <button className="o-btn o-btn--primary" type="submit" onClick={this.submit}>
                {formatMessage('global.submit')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
