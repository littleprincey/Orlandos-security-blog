import React from 'react'
// import { connect } from 'superagent'

const Nav = (props) => {
  return (
    <>
      <div>
        <div className='blogs'>
          <ul>
            <li><a href="/blog1" className='blog1' id="blog1">
              blog1
            </a>
            </li>
            <li><a href="/blog2" className='blog1' id="blog2">
              blog2
            </a>
            </li>
            <li><a href="/blog3" className='blog1' id="blog3">
              blog3
            </a>
            </li>
          </ul>
        </div> 
      </div>

    </>

  )
}
export default Nav