import { SET_BLOGS, SET_ADDED_BLOG } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return action.blogs
      case SET_ADDED_BLOG:
        return [...state, action.blogData]
      default:
        return state
  }
}

export default reducer

