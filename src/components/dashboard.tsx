import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'
import { GlobalState } from '../reducers'

// import {
//   DashboardState
// } from '../reducers/login'

type OwnProps = {

}

type ConnectedState = {
  global: GlobalState
}

type ConnectedDispatch = {
  // dispatch: {
  //
  // }
}

type OwnState = {

}

const mapStateToProps = (state: GlobalState, props: OwnProps): ConnectedState => ({
  global: state
})

const mapDispatchToProps = (dispatch: redux.Dispatch<GlobalState>): ConnectedDispatch => ({
  // dispatch: {
  //
  // }
})

class Dashboard extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <pre>{JSON.stringify(this.props.global, null, 2)}</pre>
      </div>
    )
  }
}

export const DashboardContainer: React.ComponentClass<OwnProps> =
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
