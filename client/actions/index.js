import { getBlogs } from '../apis/blogsAPI'

export const SET_BLOGS = 'SET_BLOGS'

export function setBlogs (blogs) {
  return {
    type: SET_BLOGS,
    blogs
  }
}

export const fetchBlogsFromDBandAddToRedux = () => {
  return dispatch => {
    return getBlogs()
      .then(blogs => {
        dispatch(setBlogs(blogs))
      })
  }
}

