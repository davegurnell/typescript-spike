import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { globalStore, routerHistory } from './reducers'
import { DashboardContainer } from './components/dashboard'
import { LoginFormContainer } from './components/login'
import { Router, Route } from 'react-router'
import { replace } from 'react-router-redux'

import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

function requireLogin(nextState: any, replaceFunc: any, callback: any): void {
  const state: any = globalStore.getState()

  if (state.auth && state.auth.credentials && state.auth.credentials.token) {
    console.log('requireLogin', true)
    callback()
  } else {
    console.log('requireLogin', false, replace('/login'))
    globalStore.dispatch(replace('/login'))
  }
}

ReactDOM.render(
  <Provider store={ globalStore }>
    <Grid>
      <Row>
        <Col xs={12} md={8}>
          <Router history={ routerHistory }>
            <Route path="/"      component={ DashboardContainer } onEnter={ requireLogin } />
            <Route path="/login" component={ LoginFormContainer } />
          </Router>
        </Col>
      </Row>
    </Grid>
  </Provider>,
  document.getElementById("app")
)
