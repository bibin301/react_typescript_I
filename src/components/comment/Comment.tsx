import * as React from 'react';
import * as moment from 'moment';

interface Props {
  state?: string,
  varients?: string,
  author: string,
  date: number,
  comment: string
};

interface State {

}

export default class Comment extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    state: 'default',
    varients: 'default',
    author: '',
    date: null,
    comment: ''
};

  render() {
    const { date, comment, author} = this.props;
    return (
      <div className="c-comment ">
        <time className="c-comment__date">
          {moment(date).format('DD:MM:YYYY [at] h:mm:ss a')}
        </time>
        <div className="c-comment__content">
          {comment}
        </div>
        <p className="c-comment__author u-accent-color">
          {author}
        </p>
      </div>
    );
  }
}
