import { combineReducers } from 'redux'

import blogs from './blogsReducer'
import loadContent from './loadContent'

export default combineReducers({
  blogs,
  loadContent
})
