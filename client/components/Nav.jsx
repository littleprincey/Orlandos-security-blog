import React from 'react'
// import { connect } from 'superagent'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <NavLink to='/' className="" id="">home</NavLink>
        <NavLink to='/about' className="" id="">about orlando</NavLink>
        <NavLink to='/sign-in' className="" id="">sign in</NavLink>
        <NavLink to='/sign-out' className="" id="">sign out</NavLink>
        <NavLink to='/sign-up' className="" id="">sign up</NavLink>
      </div>

    </>

  )
}
export default Nav