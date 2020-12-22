import React from 'react'
// import { connect } from 'superagent'

const Blog = (props) => {
  return (
    <>
    <h1>blogs</h1>
      <div className='blog1'>
        <div>
          <h3>blog 1!</h3>
          <p>doing the udemy course</p>
        </div>
      </div>
      <div className='blog2'>
        <div>
          <h3>blog 2!</h3>
          <p>doing the udemy course </p>
        </div>
      </div>
      <div className='blog3'>
          
          <h3>podacsts, podcasts, podcasts!</h3>
          <div>
            <p>firstly, there are a TONNE of incredible security podcasts out there! it was so exciting to discover this rich source of learning and entertainment. I started off with a newbie podcast called Hackable.  
            </p>
          </div>
          
        </div> 
    </>

  )
}
export default Blog