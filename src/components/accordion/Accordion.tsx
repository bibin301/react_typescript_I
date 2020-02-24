import * as React from 'react';

import SvgIconEnum from 'src/constants/icons/svgIconsEnum';

interface Props {
  title: string,
  content?: any,
  maxValue?: number,
  //children: element //normally already in the props since it is a native one
}

interface State {
  isExpand: boolean
}

export default class Accordion extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    title: "Title",
    content: []
  };


  constructor(props: Props) {
    super(props);
    this.state = { isExpand : false };
    this.expandToggle = this.expandToggle.bind(this);
  }

    expandToggle() {
      this.setState({ isExpand: !this.state.isExpand })
     }

  render() {
    const { isExpand } = this.state;
    const { content, title } = this.props;
    return (
      <div className={`c-accordion ${isExpand ? 'is-open' : ''}`}>
        <div className="c-accordion__heading" onClick={this.expandToggle}>
          <div className="o-heading o-heading--subtitle o-heading--collapsable">
            <h1 className="o-heading__title">{title}</h1>
            <div className="o-heading__actions-wrapper">
              <button className="o-btn o-btn--transparent" >
                <svg className={`o-icon ${isExpand ? '' : 'o-icon-rotate90'}`} width="25" height="25" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={SvgIconEnum.CARETDOWN.url}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="c-accordion__components">
          {this.props.children}
        </div>
      </div>
    )
  }
}
