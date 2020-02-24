
import * as React from 'react';
import { connect } from 'react-redux';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import {formatMessage} from './../../common/translation/Translate';
import BottomNotificationVariants from './../../constants/bottomNotification/BottomNotificationVarientEnum';
import SvgIconEnum from './../../constants/icons/svgIconsEnum';
import { RootStore } from './../../store/rootReducer';

export interface IntBottomNotificationProps {
  variants?: BottomNotificationVariants,
  message?: string,
  loadingCurrent?: string,
  loadingMax?: string,
  time?: string
}

interface IntState {
  showMe: boolean
}

const mapStateToProps = ( state: RootStore ) => ({
  variants: state.commonReducer.bottomNotification.variants,
  message: state.commonReducer.bottomNotification.message,
  loadingCurrent: state.commonReducer.bottomNotification.loadingCurrent,
  loadingMax: state.commonReducer.bottomNotification.loadingMax,
  time: state.commonReducer.bottomNotification.time
});

class BottomNotificationComponent extends React.Component <IntBottomNotificationProps, IntState> {
  public state = {
    showMe: false
  }
  componentWillReceiveProps(newProps) {
    // console.log('BottomNotificationComponent will rec prop..');
    this.setState({ showMe: true });
  }

  hideMe = () => {
    this.setState({ showMe: false })
  }
  render() {
    const { variants, message, loadingCurrent, loadingMax, time } = this.props;
    let classAttribute: string = 'c-notification-card ow-bottom-notify is-open  ';
    let subAttribute: string ;
    if (variants === BottomNotificationVariants.PRIMARY || variants === BottomNotificationVariants.LOADING) {
        classAttribute = classAttribute + 'c-notification-card--primary';
    } else if (variants === BottomNotificationVariants.ERROR) {
        classAttribute = classAttribute+ 'u-attention-required';
    }

    if (loadingCurrent || loadingMax) {
      subAttribute = loadingCurrent + '/' + loadingMax;
    } else {
      subAttribute = time;
    }

    if (this.state.showMe) {
      setTimeout(this.hideMe, 5000);
    }
    return (this.state.showMe ? <div className={classAttribute}>
        <span className='c-notification-card__label'>
            {message}
        </span>
        <span className='c-notification-card__time'>
            {subAttribute}
        </span>

        <button className='o-btn o-btn--transparent c-notification-card__btn' type='button' onClick={this.hideMe}>
          <svg className="o-icon o-icon--cross" ><title>{SvgIconEnum.CROSS.name}</title>
            <use xlinkHref={SvgIconEnum.CROSS.url}/>
          </svg>
        </button>
      </div> : <div/>
      );
  }
}

export default connect(
  mapStateToProps,
  null
)(BottomNotificationComponent)
