import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchBlogsFromDBandAddToRedux } from '../actions/index.js'

import Nav from './Nav'
import Home from './Home'




class App extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBlogsFromDBandAddToRedux())
    console.log('component did mount')
  }

  render () {
    return (
      <div className='app'>
        <Nav />
        
        <h2></h2>
        <Route exact path="/" component={Home} />
        <div> 
          <p></p>
        </div>
        
        
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    blogs: globalState.blogs,
}
}

export default connect(mapStateToProps)(App)