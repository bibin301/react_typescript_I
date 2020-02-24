import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootStore } from './../../store/rootReducer';

interface Props {
  component: any,
  isAuth: boolean,
  path?: string,
}

class PrivateRoute extends React.Component<Props, RootStore> {
  render() {
    const { component: Component, isAuth, path,  ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        return isAuth
          ? <Component {...props} />
          : <Redirect to="/" />
      }} />
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  isAuth: state.loginReducer.isAuth
})

export default connect(mapStateToProps)(PrivateRoute)
