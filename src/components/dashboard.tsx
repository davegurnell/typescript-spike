import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import {
  GlobalState
} from '../reducers'

// import {
//   DashboardState
// } from '../reducers/login'

type OwnProps = {

}

type ConnectedState = {
  // state: DashboardState
}

type ConnectedDispatch = {
  // dispatch: {
  //
  // }
}

type OwnState = {

}

const mapStateToProps = (state: GlobalState, props: OwnProps): ConnectedState => ({
  // state: state.login
})

const mapDispatchToProps = (dispatch: redux.Dispatch<GlobalState>): ConnectedDispatch => ({
  // dispatch: {
  //
  // }
})

class Dashboard extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  render () {
    return <div>
      <h1>Dashboard</h1>
    </div>
  }
}

export const DashboardContainer: React.ComponentClass<OwnProps> =
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
