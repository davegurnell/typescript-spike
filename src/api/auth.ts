import { Validated } from '../model/validation'
import { Credentials } from '../model/auth'
import { post } from './http'
import { rootUrl } from './core'

const loginUrl = `${rootUrl}/auth/login`
const logoutUrl = `${rootUrl}/auth/logout`

export type LoginRequest = {
  email: string,
  password: string
}

export const login = (request: LoginRequest): Promise<Validated<Credentials>> =>
  post(loginUrl, request)
    .then(json => json as Validated<Credentials>)
