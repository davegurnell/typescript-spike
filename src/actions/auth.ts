import * as redux from 'redux'
import api from '../api'
import { Validated } from '../model/validation'
import { Credentials } from '../model/auth'
import { replace } from 'react-router-redux'

import {
  LoginStartedAction,
  LoginCompleteAction,
  LoginFailedAction,
} from '../actions/auth'

import {
  EmailChangeAction,
  PasswordChangeAction,
} from '../actions/login'

// Action types

export type LoginStartedAction = {
  type: 'LoginStartedAction',
  email: string,
  password: string,
}

export type LoginCompleteAction = {
  type: 'LoginCompleteAction',
  response: Validated<Credentials>,
}

export type LoginFailedAction = {
  type: 'LoginFailedAction',
  error: string,
}

export type LogoutStartedAction = {
  type: 'LogoutStartedAction',
}

export type LogoutCompleteAction = {
  type: 'LogoutCompleteAction',
}

export type LogoutFailedAction = {
  type: 'LogoutFailedAction',
  error: string,
}

export type AuthAction =
  LoginStartedAction |
  LoginCompleteAction |
  LoginFailedAction |
  LogoutStartedAction |
  LogoutCompleteAction |
  LogoutFailedAction

export function loginStarted(email: string, password: string): LoginStartedAction {
  return { type: 'LoginStartedAction', email, password }
}

export function loginComplete(response: Validated<Credentials>): LoginCompleteAction {
  return { type: 'LoginCompleteAction', response }
}

export function loginFailed(error: string): LoginFailedAction {
  return { type: 'LoginFailedAction', error }
}

export function logoutStarted(): LogoutStartedAction {
  return { type: 'LogoutStartedAction' }
}

export function logoutComplete(): LogoutCompleteAction {
  return { type: 'LogoutCompleteAction' }
}

export function logoutFailed(error: string): LogoutFailedAction {
  return { type: 'LogoutFailedAction', error }
}

// Async action creators

export const submitLoginAsync = (email: string, password: string) =>
  (dispatch: redux.Dispatch<any>) => {
    dispatch(loginStarted(email, password))
    api.auth.login({ email, password })
      .then(response => dispatch(loginComplete(response)))
      .then(response => dispatch(replace('/')))
      .catch(error => dispatch(loginFailed(error)))
  }
