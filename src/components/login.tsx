import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { emailChange, passwordChange } from '../actions/login'
import { submitLoginAsync } from '../actions/auth'
import { GlobalState } from '../reducers'
import { AuthState } from '../reducers/auth'
import { LoginState } from '../reducers/login'

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap'

type OwnProps = {

}

type ConnectedState = {
  login: LoginState,
  auth: AuthState
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
  login: state.login,
  auth: state.auth,
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
    this.props.dispatch.submitLogin(this.props.login.email, this.props.login.password)
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <input
            type="text"
            className="form-control"
            placeholder="leonardo@davinci.com"
            value={this.props.login.email}
            onChange={this._onEmailChange} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <input
            type="password"
            className="form-control"
            value={this.props.login.password}
            onChange={this._onPasswordChange} />
        </FormGroup>
        <p>
          <Button bsStyle="primary" onClick={this._onSubmitClick}>
            Go!
          </Button>
        </p>
      </div>
    )
  }
}

export const LoginFormContainer: React.ComponentClass<OwnProps> =
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
