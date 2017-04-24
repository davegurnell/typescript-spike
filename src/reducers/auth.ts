import * as redux from 'redux'
import { Credentials } from '../model/auth'
import { AuthAction } from '../actions/auth'

export type AuthState = {
  credentials: Credentials | null,
  loading: boolean,
  error: string | null,
}

export const initialAuthState: AuthState = {
  credentials: null,
  loading: true,
  error: null,
}

export const authReducer = (state: AuthState = initialAuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LoginStartedAction':
      return Object.assign({}, state, { loading: true, credentials: null, error: null })
    case 'LoginCompleteAction':
      return Object.assign({}, state, { loading: false, credentials: action.response.value, error: null })
    case 'LoginFailedAction':
      return Object.assign({}, state, { loading: false, credentials: null, error: action.error })
    case 'LogoutStartedAction':
      return Object.assign({}, state, { loading: true, credentials: null, error: null })
    case 'LogoutCompleteAction':
      return Object.assign({}, state, { loading: false, credentials: null, error: null })
    case 'LogoutFailedAction':
      return Object.assign({}, state, { loading: false, credentials: null, error: action.error })
    default:
      return state
  }
}
