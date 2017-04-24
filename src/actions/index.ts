import { AuthAction } from './auth'
import { LoginAction } from './login'

// Global Action type

export type Action =
  AuthAction |
  LoginAction
