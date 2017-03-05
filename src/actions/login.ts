import * as redux from 'redux'
import api from '../api'
import { LoginResponse } from '../api/login'

// Action types

export type EmailChangeAction = {
  type: 'EmailChangeAction',
  value: string
}

export type PasswordChangeAction = {
  type: 'PasswordChangeAction',
  value: string
}

export type LoginStartedAction = {
  type: 'LoginStartedAction',
  email: string,
  password: string
}

export type LoginCompleteAction = {
  type: 'LoginCompleteAction',
  response: LoginResponse
}

export type LoginFailedAction = {
  type: 'LoginFailedAction',
  error: string,
}

export type LoginAction =
  EmailChangeAction |
  PasswordChangeAction |
  LoginStartedAction |
  LoginCompleteAction |
  LoginFailedAction

// Action creators

export function emailChange(value: string): EmailChangeAction {
  return { type: 'EmailChangeAction', value }
}

export function passwordChange(value: string): PasswordChangeAction {
  return { type: 'PasswordChangeAction', value }
}

export function loginStarted(email: string, password: string): LoginStartedAction {
  return { type: 'LoginStartedAction', email, password }
}

export function loginComplete(response: LoginResponse): LoginCompleteAction {
  return { type: 'LoginCompleteAction', response }
}

export function loginFailed(error: string): LoginFailedAction {
  return { type: 'LoginFailedAction', error }
}

// Async action creators

export const submitLoginAsync = (email: string, password: string) =>
  (dispatch: redux.Dispatch<any>) => {
    dispatch(loginStarted(email, password))
    api.login.login({ email, password }).then(
      response => dispatch(loginComplete(response)),
      error    => dispatch(loginFailed(error))
    )
  }
