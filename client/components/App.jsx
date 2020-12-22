import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'


export class App extends React.Component {
  state = {
    
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


export default App