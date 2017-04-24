import * as redux from 'react-redux'
import { replace } from 'react-router-redux'
import { Action } from '../actions'

export type LoginState = {
  email: string,
  password: string,
  loading: boolean,
  token: string | null,
  error: string | null,
}

const initialLoginState: LoginState = {
  email: '',
  password: '',
  loading: false,
  token: null,
  error: null,
}

export const loginReducer = (state: LoginState = initialLoginState, action: Action): LoginState => {
  switch (action.type) {
    case 'EmailChangeAction':
      return Object.assign({}, state, { email: action.value })
    case 'PasswordChangeAction':
      return Object.assign({}, state, { password: action.value })
    case 'LoginCompleteAction':
      return Object.assign({}, state, { password: '' })
    default:
      return state
  }
}
