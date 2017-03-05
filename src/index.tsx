import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { globalStore } from './reducers'
import { LoginFormContainer } from './components/login'

ReactDOM.render(
  <Provider store={globalStore}>
    <LoginFormContainer/>
  </Provider>,
  document.getElementById("app")
)
