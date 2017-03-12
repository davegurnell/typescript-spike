import { combineReducers, applyMiddleware, createStore } from 'redux'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { LoginState, loginReducer } from '../reducers/login'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Global state

export type GlobalState = {
  login: LoginState,
}

// Global reducer

export const globalReducer = combineReducers({
  login: loginReducer,
  routing: routerReducer,
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

export const routerHistory =
  syncHistoryWithStore(browserHistory, globalStore)
