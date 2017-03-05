import { combineReducers, applyMiddleware, createStore } from 'redux'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { LoginState, loginReducer } from '../reducers/login'

// Global state

export type GlobalState = {
  login: LoginState,
}

// Global reducer

export const globalReducer = combineReducers({
  login: loginReducer,
})

// Global store

const logger = createLogger({
  // redux-logger options:
  // https://github.com/evgenyrodionov/redux-logger
})

export const globalStore = createStore(
  globalReducer,
  applyMiddleware(thunk, logger)
)
