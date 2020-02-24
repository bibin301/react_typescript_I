import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getAllDetectionRulesList } from 'src/service/detection/action';
import DetectionGrid from 'src/scenes/detection/detectionGrid';
import { RootStore } from './../../store/rootReducer';

interface Props {
  userId: string,
  id: number,
  name: string,
  allDetectionList: any,
  availableLists: any,
  availableOrgUnits: any,
  orgUnits: any,
  availablePerms: any
}

class DetectionDashboard extends React.Component<Props, null> {

  componentDidMount() {
    const { id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms } = this.props;
    getAllDetectionRulesList(0, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
  }

  render() {
    const { allDetectionList } = this.props;
    
    return (
      <div className="c-content__view js-content__view">
        <Switch>
          <Redirect exact path="/dashboard/detection" to="/dashboard/detection/rules/r_per_record" />
          <Route path="/dashboard/detection/rules/r_per_record" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />
          <Route path="/dashboard/detection/rules/r_daily" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />
          <Route path="/dashboard/detection/rules/r_weekly" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />
          <Route path="/dashboard/detection/rules/r_monthly" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />
          <Route path="/dashboard/detection/rules/r_quarterly" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />
          <Route path="/dashboard/detection/rules/r_yearly" render={() => <DetectionGrid allDetectionList={allDetectionList} isRules />} />

          <Route path="/dashboard/detection/scenarios/online" render={() => <DetectionGrid allDetectionList={allDetectionList} isScenarios />} />
          <Route path="/dashboard/detection/scenarios/real_time" render={() => <DetectionGrid allDetectionList={allDetectionList} isScenarios />} />
          <Route path="/dashboard/detection/scenarios/batch" render={() => <DetectionGrid allDetectionList={allDetectionList} isScenarios />} />
          <Route path="/dashboard/detection/scenarios/workflow" render={() => <DetectionGrid allDetectionList={allDetectionList} isScenarios />} />

          <Route path="/dashboard/detection/profiles/per_record" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_daily" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_weekly" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_monthly" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_quarterly" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_yearly" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_hourly" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
          <Route path="/dashboard/detection/profiles/p_minutely" render={() => <DetectionGrid allDetectionList={allDetectionList} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  availableLists: state.loginReducer.availableLists,
  allDetectionList: state.detectionReducer.allDetectionList,
  availableOrgUnits: state.loginReducer.availableOrgUnits,
  availablePerms: state.loginReducer.availablePerms,
  orgUnits: state.loginReducer.orgUnits
})

export default connect(mapStateToProps, null)(DetectionDashboard)