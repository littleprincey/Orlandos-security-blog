import React from 'react'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from '../actions/AuthActions'

const logOutUser = (dispatch) => {
  logOff()
  dispatch(logOut())
}

const Nav = () => {
  return (
    <>
      <div className="nav">
        <NavLink to='/' className="nav-link" id="">home</NavLink>
        <NavLink to='/about' className="nav-link" id="">about orlando</NavLink>
        <NavLink to='/sign-in' className="nav-link" id="">sign in</NavLink>

        <IfAuthenticated>
          <NavLink onClick={() => logOutUser(props.dispatch)} to='/' className="nav-link" id="">sign out</NavLink>
          <NavLink to='/add-blog' className="nav-link" id="">add blog</NavLink>
        </IfAuthenticated>
      </div>

    </>

  )
}
export default connect()(Nav)