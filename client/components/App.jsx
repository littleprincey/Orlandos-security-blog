import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchBlogsFromDBandAddToRedux } from '../actions/index.js'

import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import AddBlog from './AddBlog.jsx'
import SignIn from './SignIn.jsx'


class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBlogsFromDBandAddToRedux())
    console.log('component did mount')
  }
  
  render () {
   
    return (
      <div className='bg'>
        <Nav />
        {this.props.loadContent && (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add-blog" component={AddBlog} />
              <Route exact path="/sign-in" component={SignIn} />
            </Switch>
          </>
        )}
        
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    blogs: globalState.blogs,
    loadContent: globalState.loadContent
}
}

export default connect(mapStateToProps)(App)