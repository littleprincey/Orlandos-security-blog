import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { connect } from 'superagent'

const Home = (props) => {
  // blog = this.props.blogs 
  
  const theBlogs = props.blogs
  const latestBlog = theBlogs.pop()

  return (
    <>
      <div>
        <h1>orlando's most excellent security blog</h1>
        <div className='blogs'>
          {/* <ul>
            <li>
              <Link to='/blog1'>go to blog 1</Link>
            </li>
            <li>
              <Link to='/blog2'>go to blog 2</Link>
            </li>
            <li>
              <Link to='/blog3'>go to blog 3</Link>
            </li>
          </ul> */}
          <div className="intro-text">
            <h3>ethical hacking, here i come!</h3>
            <p>here i will post blogs on my joyous journey through the world of cyber security! 
              i've just graduated from a 15 week intensive web development bootcamp as a full stack developer! it was here that i discovered a burning drive to delve in and offer my skills to the wonderful world of cyber security. it's epic. i'm so excited. 
            </p>
          </div>
          <div className="latest-blog">
          <h3>Latest:</h3>
            theBlogs ? <div> 
              <p>{latestBlog.title}</p>
              <p>{latestBlog.date}</p>
              <p>{latestBlog.content}</p>
            </div>
          </div>
          
        </div> 
      </div>

    </>

  )
}
function mapStateToProps (globalState) {
  return {
    blogs: globalState.blogs,
    loadContent: globalState.loadContent
}
}

export default connect(mapStateToProps)(Home)