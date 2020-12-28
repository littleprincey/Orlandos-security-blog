import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <NavLink to='/' className="nav-link" id="">home</NavLink>
        <NavLink to='/about' className="nav-link" id="">about orlando</NavLink>
        <NavLink to='/sign-in' className="nav-link" id="">sign in</NavLink>
        <ifAuthenticated>
          <NavLink to='/sign-out' className="nav-link" id="">sign out</NavLink>
          <NavLink to='/add-blog' className="nav-link" id="">add blog</NavLink>
        </ifAuthenticated>
      </div>

    </>

  )
}
export default Nav