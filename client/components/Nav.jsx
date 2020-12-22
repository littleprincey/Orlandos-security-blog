import React from 'react'
// import { connect } from 'superagent'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <NavLink to='/' className="nav-link" id="">home</NavLink>
        <NavLink to='/about' className="nav-link" id="">about orlando</NavLink>
        <NavLink to='/sign-in' className="nav-link" id="">sign in</NavLink>
        <NavLink to='/sign-out' className="nav-link" id="">sign out</NavLink>
        <NavLink to='/sign-up' className="nav-link" id="">sign up</NavLink>
      </div>

    </>

  )
}
export default Nav