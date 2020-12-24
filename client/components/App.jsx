import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchBlogsFromDBandAddToRedux } from '../actions/index.js'

import Nav from './Nav'
import Home from './Home'
import Blog from './Blog'
import About from './About'


class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBlogsFromDBandAddToRedux())
    console.log('component did mount')
  }
  
  render () {
    const blog = this.props.blogs 
    return (
      <div className='app'>
        <Nav />
        {this.props.loadContent && (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/about" component={About} />
            </Switch>
            <h3>Latest:</h3>
            <div> 
              <p>{blog[0].title}</p>
              <p>{blog[0].date}</p>
              <p>{blog[0].content}</p>
            </div>
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