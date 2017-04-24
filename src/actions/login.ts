import * as redux from 'redux'

// Action types

export type EmailChangeAction = {
  type: 'EmailChangeAction',
  value: string
}

export type PasswordChangeAction = {
  type: 'PasswordChangeAction',
  value: string
}

export type LoginAction =
  EmailChangeAction |
  PasswordChangeAction

// Action creators

export function emailChange(value: string): EmailChangeAction {
  return { type: 'EmailChangeAction', value }
}

export function passwordChange(value: string): PasswordChangeAction {
  return { type: 'PasswordChangeAction', value }
}
