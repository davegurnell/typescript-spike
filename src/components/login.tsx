import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import {
  emailChange,
  passwordChange,
  submitLoginAsync
} from '../actions/login'

import {
  GlobalState
} from '../reducers'

import {
  LoginState
} from '../reducers/login'

type OwnProps = {

}

type ConnectedState = {
  state: LoginState
}

type ConnectedDispatch = {
  dispatch: {
    emailChange: (email: string) => void,
    passwordChange: (password: string) => void,
    submitLogin: (email: string, password: string) => void,
  }
}

type OwnState = {

}

const mapStateToProps = (state: GlobalState, props: OwnProps): ConnectedState => ({
  state: state.login
})

const mapDispatchToProps = (dispatch: redux.Dispatch<GlobalState>): ConnectedDispatch => ({
  dispatch: {
    emailChange: (email: string) => dispatch(emailChange(email)),
    passwordChange: (password: string) => dispatch(passwordChange(password)),
    submitLogin: (email: string, password: string) => dispatch(submitLoginAsync(email, password)),
  }
})

class LoginForm extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  _onEmailChange = (evt: any) =>
    this.props.dispatch.emailChange(evt.target.value)

  _onPasswordChange = (evt: any) =>
    this.props.dispatch.passwordChange(evt.target.value)

  _onSubmitClick = (evt: any) => {
    this.props.dispatch.submitLogin(this.props.state.email, this.props.state.password)
  }

  render () {
    return <div>
      <p><input type="text" value={this.props.state.email} onChange={this._onEmailChange} /></p>
      <p><input type="password" value={this.props.state.password} onChange={this._onPasswordChange} /></p>
      <p><button onClick={this._onSubmitClick}>Go!</button></p>
      <pre>{JSON.stringify(this.props.state, null, 2)}</pre>
    </div>
  }
}

export const LoginFormContainer: React.ComponentClass<OwnProps> =
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
