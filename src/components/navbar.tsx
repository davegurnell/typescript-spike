// import * as React from 'react'
// import * as redux from 'redux'
// import { Link } from 'react-router'
// import { connect } from 'react-redux'
// import { emailChange, passwordChange } from '../actions/login'
// import { submitLoginAsync } from '../actions/auth'
// import { GlobalState } from '../reducers'
// import { AuthState } from '../reducers/auth'
// import { NavbarState } from '../reducers/login'
//
// import {
//   Navbar,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem,
// } from 'react-bootstrap'
//
// type OwnProps = {
//
// }
//
// type ConnectedState = {
//   routing: any,
// }
//
// type ConnectedDispatch = {
//   dispatch: {
//
//   }
// }
//
// type OwnState = {
//
// }
//
// const mapStateToProps = (state: GlobalState, props: OwnProps): ConnectedState => ({
//
// })
//
// const mapDispatchToProps = (dispatch: redux.Dispatch<GlobalState>): ConnectedDispatch => ({
//
// })
//
// export class Topnav extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {
//   render () {
//     return (
//       <Navbar staticTop={true}>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to='/'>Demo</Link>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav>
//           <NavItem href="/">Home</NavItem>
//           <NavItem href="/login">Login</NavItem>
//         </Nav>
//       </Navbar>
//     )
//   }
// }
//
// export const TopnavContainer: React.ComponentClass<OwnProps> =
//   connect(mapStateToProps, mapDispatchToProps)(Topnav)
