import { LoginAction } from '../actions/login'

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

export const loginReducer = (state: LoginState = initialLoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'EmailChangeAction':
      return Object.assign({}, state, { email: action.value })
    case 'PasswordChangeAction':
      return Object.assign({}, state, { password: action.value })
    case 'LoginStartedAction':
      return Object.assign({}, state, { loading: true, error: null })
    case 'LoginCompleteAction':
      return Object.assign({}, state, { loading: false, token: action.response.token, error: null })
    case 'LoginFailedAction':
      return Object.assign({}, state, { loading: false, token: null, error: action.error })
    default:
      return state
  }
}
