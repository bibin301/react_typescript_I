import * as React from 'react';
import { Dispatch } from 'redux';
//import { withRouter } from 'react-router-dom'

import { LoginFormComponent } from './components/LoginForm';
import './../../common/css/mockcss/style.css';
import { loginReducer, State, initialState } from './../../service/login/reducer';
import { loginInitCache, authenticateUser, loginStartupCall } from './../../service/login/action';
import { connect } from 'react-redux';
import { RootStore } from './../../store/rootReducer';
import { dispatchLoadingShow } from './../../service/common/action';

interface loginState {
  user: {
    name: string,
    password: string
  }
}

interface Props {
  user: {
    name: string,
    password: string
  },
  isAuth: boolean,
  history?: any,
  loginSuccess: boolean,
  authenticateUser: any,
  loginInitCache: any,
  isLoading: boolean,
  dispatchLoadingShow: any,
  loginErrMsg: string,
  loginStartupCall: any
}


class LoginForm extends React.Component<Props, loginState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        name: '',
        password: ''
      }
    }
    this.onSave = this.onSave.bind(this);
    this.onFieldValueChange = this.onFieldValueChange.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      user: {
        ...this.state.user,
        [fieldName]: value,
      }
    };
    this.setState(nextState);
  }

  componentWillMount() {
  }

   componentDidMount() {
     this.props.loginInitCache();
     this.props.loginStartupCall();
   }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.loginSuccess === true) {
      this.props.history.push('/dashboard'); //TODO switch to dashboard when the dashboard tsx is ready
    } else {
      //TODO render loginErrMsg somewhere
    }
  }

  private onSave(e: React.FormEvent<HTMLInputElement>) {
    this.props.authenticateUser({ email: this.state.user.name, password: this.state.user.password });
    this.props.dispatchLoadingShow();
    e.preventDefault();
  }
  render() {
    return (
     <LoginFormComponent name={this.state.user.name} password={this.state.user.password} onSave={this.onSave} onChange={this.onFieldValueChange} isLoading={this.props.isLoading} loginErrMsg={this.props.loginErrMsg}/>
    );
  }
}


const mapDispatchToProps = (dispatch: Dispatch<loginState>) => ({
  loginInitCache,
  authenticateUser,
  dispatchLoadingShow,
  loginStartupCall
});

const mapStateToProps = (state: RootStore) => ({
  isAuth: state.loginReducer.isAuth,
  loginSuccess: state.loginReducer.loginSuccess,
  isLoading: state.commonReducer.isLoading,
  loginErrMsg: state.loginReducer.loginErrMsg
});

export const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
