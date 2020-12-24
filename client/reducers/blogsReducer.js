import { SET_BLOGS } from '../actions/index'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOGS:
      return action.blogs
    default:
      return state
  }
}

export default reducer
