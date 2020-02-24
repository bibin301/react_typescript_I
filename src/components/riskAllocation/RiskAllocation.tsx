import * as  React from 'react';
import * as ReactSlider from './ReactSlider';

const arrayOfStyle = [
  'o-risk-allocation__segment o-risk-allocation__segment--low',
  'o-risk-allocation__segment o-risk-allocation__segment--guarded',
  'o-risk-allocation__segment o-risk-allocation__segment--elevated',
  'o-risk-allocation__segment o-risk-allocation__segment--high',
  'o-risk-allocation__segment o-risk-allocation__segment--severe'
];

interface Props {
  varients: string,
  defaultValue: any,
  title?: string,
  onChange?: any
};

interface State {
  values: any,
  isOpen: boolean
};


export default class RiskAllocation extends React.Component<Props, State> {

  public static defaultProps: Partial<Props> = {
    varients: 'default',
    title: ''
  };

  state = {
    values: this.props.defaultValue,
    isOpen: false
  }

  handleOnChange = (values) => {
    this.setState({ values });
    this.props.onChange(values);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ values: newProps.defaultValue });
  }

  render() {
    const { values } = this.state;

    switch (this.props.varients) {
      case 'static':
        return (
          <ol className="g-list g-list--inline g-list--flush o-risk-allocation ow-riskMarRight">
            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--low "
              style={{ width: values[0] + '%' }}>
              <span className="u-visually-hidden">Low</span>
            </li>
            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--guarded "
              style={{ width: values[1] - values[0] + '%' }}>
              <span className="u-visually-hidden">Guarded</span>
            </li>
            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--elevated "
              style={{ width: values[2] - values[1] + '%' }}>
              <span className="u-visually-hidden">Elevated</span>
            </li>
            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--high "
              style={{ width: values[3] - values[2] + '%' }}>
              <span className="u-visually-hidden">High</span>
            </li>
            <li className="g-list__item o-risk-allocation__segment o-risk-allocation__segment--severe "
              style={{ width: 100 - values[3] + '%' }}>
              <span className="u-visually-hidden">Severe</span>
            </li>
          </ol>
        );
      case 'labelled':
        return (
          <React.Fragment>
            <div className="o-label o-risk-allocation__label">
              <span>{this.props.title}</span>
              {/* Todo : need to implement option if it is require  */}
            </div>
            <ReactSlider
              defaultValue={this.props.defaultValue}
              className="g-list g-list--inline o-risk-allocation o-risk-allocation--editable ow-riskHeight"
              barClassName={arrayOfStyle}
              onChange={this.handleOnChange} withBars>
              <div className="o-risk-allocation__threshold">{values[0]}</div>
              <div className="o-risk-allocation__threshold">{values[1]}</div>
              <div className="o-risk-allocation__threshold">{values[2]}</div>
              <div className="o-risk-allocation__threshold">{values[3]}</div>
            </ReactSlider>
          </React.Fragment>
        );
      default:
        return (
          <ReactSlider
            defaultValue={this.props.defaultValue}
            className="g-list g-list--inline g-list--flush o-risk-allocation o-risk-allocation--editable"
            barClassName={arrayOfStyle}
            onChange={this.handleOnChange} withBars>
            <div className="o-risk-allocation__threshold">{values[0]}</div>
            <div className="o-risk-allocation__threshold">{values[1]}</div>
            <div className="o-risk-allocation__threshold">{values[2]}</div>
            <div className="o-risk-allocation__threshold">{values[3]}</div>
          </ReactSlider>
        );
    }
  }
}
