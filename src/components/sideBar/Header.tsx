import * as React from 'react';
import { formatMessage } from './../../common/translation/Translate';
import visibleTabEnum from './../../constants/SidebarEnum';
import Attribute from './../attribute/Attribute';
import Accordion from 'src/components/accordion/Accordion';
import { FormattedMessage } from 'react-intl';
import navEnum from './../../constants/NavEnum';
import { resetTab, changeTab } from './../../service/common/action';
interface Props {
  navEnum: navEnum
}

interface State {
  visibleTab: visibleTabEnum,
}

export class SideBarHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visibleTab: visibleTabEnum.RELATED,
    }
  }

  componentWillUnmount() {
    resetTab();
  }

  render() {

    const { visibleTab } = this.state;
    const changeVisibility = (event: any) => {
      this.setState({ visibleTab: event.target.name });
      changeTab(event.target.name);
    }

    return (
      <nav className="c-tabs__nav">
        <ul className="c-tabs__list">
          <li className="c-tabs__title">
            <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === visibleTabEnum.RELATED ? 'is-active' : ''}`}
              name={visibleTabEnum.RELATED} onClick={changeVisibility}>
              <FormattedMessage id={ 'sidebar.related' } />
            </button>
          </li>
          {
            ((this.props.navEnum == navEnum.DASHBOARD) || (this.props.navEnum === navEnum.ANALYSIS)) &&
            <li className="c-tabs__title">

              <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === visibleTabEnum.DETAILS ? 'is-active' : ''}`}
                name={visibleTabEnum.DETAILS} onClick={changeVisibility}>
                <FormattedMessage id={ 'sidebar.details' } />
              </button>
            </li>
          }
          <li className="c-tabs__title">
            <button className={`c-tabs__link u-text-medium js-tabs-link ${visibleTab === visibleTabEnum.HISTORY ? 'is-active' : ''}`}
              name={visibleTabEnum.HISTORY} onClick={changeVisibility}>
              <FormattedMessage id={ 'sidebar.history' } />
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}
