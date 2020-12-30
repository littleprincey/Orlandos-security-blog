import React from 'react'
import { connect } from 'react-redux'

import { addProfileToDbAndRedux } from '../actions'

class AddBlog extends React.Component {
  state = {
    title: '',
    date: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.dispatch(addProfileToDbAndRedux({
      title: this.state.title,
      date: this.state.date,
      content: this.state.content,
    }))
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <form className='form'>

          <label className='btn' htmlFor="title">Title: </label>
          <input onChange={this.handleChange} className='input' value={this.state.title} autoFocus={true} name="title" type="text" id="title"/>
          <br/>

          <label className='btn' htmlFor="date">Date: </label>
          <input onChange={this.handleChange} className='input' value={this.state.date} autoFocus={true} name="date" type="text" id="date"/>
          <br/>

          <label className='btn' htmlFor="content">Content: </label>
          <textarea onChange={this.handleChange} className='input' value={this.state.content} autoFocus={true} name="content" type="text" id="content"/> 
          
          <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddBlog)