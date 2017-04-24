import { combineReducers, applyMiddleware, createStore } from 'redux'
import * as createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { AuthState, authReducer } from './auth'
import { LoginState, loginReducer } from './login'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'

// Global state

export type GlobalState = {
  auth: AuthState,
  login: LoginState,
}

// Global reducer

export const globalReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  routing: routerReducer,
})

// Global store

const logger = createLogger({
  // redux-logger options:
  // https://github.com/evgenyrodionov/redux-logger
})

const router = routerMiddleware(browserHistory)

export const globalStore = createStore(
  globalReducer,
  applyMiddleware(thunk, logger, router)
)

export const routerHistory =
  syncHistoryWithStore(browserHistory, globalStore)
