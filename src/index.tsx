import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { globalStore, routerHistory } from './reducers'
import { DashboardContainer } from './components/dashboard'
import { LoginFormContainer } from './components/login'
import { Router, Route } from 'react-router'

ReactDOM.render(
  <Provider store={globalStore}>
    <Router history={routerHistory}>
      <Route path="/" component={ DashboardContainer } />
      <Route path="/login" component={ LoginFormContainer } />
    </Router>
  </Provider>,
  document.getElementById("app")
)
