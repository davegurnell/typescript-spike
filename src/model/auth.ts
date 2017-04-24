export type AuthToken = string

export type Identity = {
  id: string,
  name: string,
  email: string,
}

export type Credentials = {
  token: AuthToken,
  effective: Identity,
  real: Identity | null,
}
