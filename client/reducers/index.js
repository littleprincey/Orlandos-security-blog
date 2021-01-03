import { combineReducers } from 'redux'

import blogs from './blogsReducer'
import loadContent from './loadContent'
import auth from './AuthReducer'

export default combineReducers({
  blogs,
  loadContent,
  auth
})
